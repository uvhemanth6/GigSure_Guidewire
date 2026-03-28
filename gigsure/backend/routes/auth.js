const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { pool } = require('../db/db');

// ❌ removed redis

router.post('/register', async (req, res) => {
  try {
    const { name, mobile, platform, zone, city, dailyEarnings, lat, lon } = req.body;

    let workerResult = await pool.query('SELECT * FROM workers WHERE mobile = $1', [mobile]);
    let worker;

    if (workerResult.rows.length === 0) {
      const insertResult = await pool.query(
        `INSERT INTO workers (name, mobile, platform, zone, city, daily_earnings, lat, lon) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [name, mobile, platform, zone, city, dailyEarnings, lat, lon]
      );
      worker = insertResult.rows[0];
    } else {
      worker = workerResult.rows[0];
      await pool.query(
        'UPDATE workers SET lat = $1, lon = $2 WHERE id = $3',
        [lat, lon, worker.id]
      );
    }

    const token = jwt.sign(
      { id: worker.id, platform: worker.platform, zone: worker.zone },
      process.env.JWT_SECRET || 'supersecret_hackathon_key',
      { expiresIn: '7d' }
    );

    // ❌ removed redis session caching

    res.status(200).json({ token, worker });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Failed to authenticate worker' });
  }
});

module.exports = router;