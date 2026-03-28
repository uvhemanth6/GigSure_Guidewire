const express = require('express');
const router = express.Router();
const axios = require('axios');
const { pool } = require('../db/db');

// Mock auth middleware for quick hackathon tests
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

router.post('/calculate', verifyUser, async (req, res) => {
  try {
    const { zone, zone_risk_score, seasonal_index, tenure_months, daily_earnings, historical_claims } = req.body;
    
    const mlApiUrl = process.env.ML_API_URL || 'http://localhost:8000';
    const mlResponse = await axios.post(`${mlApiUrl}/calculate-premium`, {
      zone,
      zone_risk_score,
      seasonal_index,
      tenure_months,
      daily_earnings,
      historical_claims
    });

    res.json(mlResponse.data);
  } catch (error) {
    console.error('Premium calculation error:', error);
    res.status(500).json({ error: 'Failed to calculate premium' });
  }
});

router.post('/purchase', verifyUser, async (req, res) => {
  try {
    const { plan, weeklyPremium, razorpayPaymentId } = req.body;
    
    // Coverage for 1 week starting now
    const now = new Date();
    const coverageStart = new Date(now);
    const coverageEnd = new Date(now);
    coverageEnd.setDate(coverageEnd.getDate() + 7);

    const result = await pool.query(
      `INSERT INTO policies (worker_id, plan, weekly_premium, coverage_start, coverage_end, razorpay_payment_id) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [req.user.id, plan, weeklyPremium, coverageStart, coverageEnd, razorpayPaymentId]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Policy purchase error:', error);
    res.status(500).json({ error: 'Failed to complete policy purchase' });
  }
});

module.exports = router;
