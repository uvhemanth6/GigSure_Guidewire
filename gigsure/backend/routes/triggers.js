const express = require('express');
const router = express.Router();
const { Queue, Worker } = require('bullmq');
const { pool } = require('../db/db');

// Reusing same redis conn for bullmq
const connection = {
  url: process.env.REDIS_URL || 'redis://localhost:6379'
};

const triggersQueue = new Queue('disruption-triggers', { connection });

router.post('/simulate', async (req, res) => {
  const { triggerType, triggerValue, zone } = req.body;
  
  // Enqueue a job to process active policies in this zone
  await triggersQueue.add('evaluate-trigger', {
    triggerType,
    triggerValue,
    zone
  });

  res.json({ message: 'Trigger simulated and queued for evaluation.' });
});

// BullMQ worker to process claims asynchronously
const claimsWorker = new Worker('disruption-triggers', async job => {
  const { triggerType, triggerValue, zone } = job.data;
  console.log(`Evaluating trigger: ${triggerType} in zone: ${zone}`);

  // Find all active policies in affected zone
  const activePoliciesResult = await pool.query(
    `SELECT p.id as policy_id, w.id as worker_id, p.plan 
     FROM policies p 
     JOIN workers w ON p.worker_id = w.id 
     WHERE w.zone = $1 AND p.status = 'ACTIVE' 
     AND p.coverage_start <= NOW() AND p.coverage_end >= NOW()`,
    [zone]
  );

  const policies = activePoliciesResult.rows;
  console.log(`Found ${policies.length} active policies to evaluate.`);

  for (const policy of policies) {
    let risk_score = 0;
    
    // Simulate risk scoring rules
    // Rule 1: Not in zone -> +30 (mocked randomly for simulation)
    const isOutZone = Math.random() > 0.8; 
    if (isOutZone) risk_score += 30;

    // Rule 2: No delivery activity before disruption -> +25 (mocked)
    const noActivity = Math.random() > 0.7;
    if (noActivity) risk_score += 25;

    // Rule 3: Claimed more than 2x this week -> +20 (mocking query)
    const claimsCountRes = await pool.query(
      `SELECT COUNT(*) FROM claims WHERE worker_id = $1 AND created_at > NOW() - INTERVAL '7 days'`,
      [policy.worker_id]
    );
    if (parseInt(claimsCountRes.rows[0].count) > 2) {
      risk_score += 20;
    }

    let status = 'REJECTED';
    let payout = 0;

    if (risk_score <= 30) {
      status = 'APPROVED';
      // Setup payload mock logic
      payout = policy.plan === 'Premium' ? 1000 : (policy.plan === 'Standard' ? 600 : 300);
    } else if (risk_score <= 60) {
      status = 'GRACE_HOLD';
      payout = 0;
    }

    // Capture standard simulated IP location/network info (would use ipapi.co typically in real env)
    const simTriggerVal = {
      value: triggerValue,
      simulated_event: triggerType,
      ipapi: { ip: "8.8.8.8", network: "Mocked 4G/5G" }
    };

    // Save claim
    await pool.query(
      `INSERT INTO claims (worker_id, policy_id, trigger_type, trigger_value, risk_score, status, payout_amount, razorpay_payout_id)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [policy.worker_id, policy.policy_id, triggerType, simTriggerVal, risk_score, status, payout, status === 'APPROVED' ? 'pout_mock_' + Date.now() : null]
    );
  }
}, { connection });

claimsWorker.on('completed', job => {
  console.log(`Job ${job.id} evaluating triggers has completed!`);
});

claimsWorker.on('failed', (job, err) => {
  console.error(`Job ${job.id} evaluating triggers has failed`, err);
});

module.exports = router;
