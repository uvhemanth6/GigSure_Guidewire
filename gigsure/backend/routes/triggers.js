const express = require('express');
const router = express.Router();
const { pool } = require('../db/db');

// ❌ removed BullMQ + Redis completely

router.post('/simulate', async (req, res) => {
  try {
    const { triggerType, triggerValue, zone } = req.body;

    console.log(`Evaluating trigger: ${triggerType} in zone: ${zone}`);

    const activePoliciesResult = await pool.query(
      `SELECT p.id as policy_id, w.id as worker_id, p.plan 
       FROM policies p 
       JOIN workers w ON p.worker_id = w.id 
       WHERE w.zone = $1 AND p.status = 'ACTIVE' 
       AND p.coverage_start <= NOW() AND p.coverage_end >= NOW()`,
      [zone]
    );

    const policies = activePoliciesResult.rows;

    for (const policy of policies) {
      let risk_score = 0;

      if (Math.random() > 0.8) risk_score += 30;
      if (Math.random() > 0.7) risk_score += 25;

      const claimsCountRes = await pool.query(
        `SELECT COUNT(*) FROM claims 
         WHERE worker_id = $1 AND created_at > NOW() - INTERVAL '7 days'`,
        [policy.worker_id]
      );

      if (parseInt(claimsCountRes.rows[0].count) > 2) {
        risk_score += 20;
      }

      let status = 'REJECTED';
      let payout = 0;

      if (risk_score <= 30) {
        status = 'APPROVED';
        payout =
          policy.plan === 'Premium'
            ? 1000
            : policy.plan === 'Standard'
            ? 600
            : 300;
      } else if (risk_score <= 60) {
        status = 'GRACE_HOLD';
      }

      const simTriggerVal = {
        value: triggerValue,
        simulated_event: triggerType,
        ipapi: { ip: "8.8.8.8", network: "Mocked 4G/5G" }
      };

      await pool.query(
        `INSERT INTO claims 
        (worker_id, policy_id, trigger_type, trigger_value, risk_score, status, payout_amount, razorpay_payout_id)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [
          policy.worker_id,
          policy.policy_id,
          triggerType,
          simTriggerVal,
          risk_score,
          status,
          payout,
          status === 'APPROVED' ? 'pout_mock_' + Date.now() : null
        ]
      );
    }

    res.json({ message: 'Trigger processed successfully (no queue).' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Trigger processing failed' });
  }
});

module.exports = router;