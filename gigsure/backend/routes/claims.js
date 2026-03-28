const express = require('express');
const router = express.Router();
const { pool } = require('../db/db');

const verifyUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    const jwt = require('jsonwebtoken');
    jwt.verify(token, process.env.JWT_SECRET || 'supersecret_hackathon_key', (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

router.get('/', verifyUser, async (req, res) => {
  try {
    const claims = await pool.query(
      'SELECT * FROM claims WHERE worker_id = $1 ORDER BY created_at DESC',
      [req.user.id]
    );
    res.json(claims.rows);
  } catch (err) {
    console.error('Error fetching claims:', err);
    res.status(500).json({ error: 'Failed to fetch claims' });
  }
});

// Optionally user stats endpoint included here or split
router.get('/stats', verifyUser, async (req, res) => {
  try {
    const claimsStats = await pool.query(
      `SELECT COUNT(*) as disruption_days, SUM(payout_amount) as payouts_received 
       FROM claims WHERE worker_id = $1 AND status = 'APPROVED'`,
      [req.user.id]
    );
    const activePlan = await pool.query(
      `SELECT * FROM policies WHERE worker_id = $1 AND status = 'ACTIVE' 
       AND coverage_start <= NOW() AND coverage_end >= NOW() ORDER BY created_at DESC LIMIT 1`,
      [req.user.id]
    );
    
    res.json({
      disruption_days: claimsStats.rows[0].disruption_days || 0,
      payouts_received: claimsStats.rows[0].payouts_received || 0,
      active_policy: activePlan.rows.length > 0 ? activePlan.rows[0] : null
    });
  } catch (err) {
    console.error('Error fetching stats:', err);
    res.status(500).json({ error: 'Failed to fetch dashboard stats' });
  }
});

module.exports = router;
