const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/gigsure',
});

const initDB = async () => {
  try {
    console.log('Initializing database tables...');
    await pool.query(`
      CREATE TABLE IF NOT EXISTS workers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        mobile VARCHAR(20) UNIQUE NOT NULL,
        platform VARCHAR(50) NOT NULL,
        zone VARCHAR(100),
        city VARCHAR(100),
        daily_earnings NUMERIC(10,2),
        lat NUMERIC(10,8),
        lon NUMERIC(11,8),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS policies (
        id SERIAL PRIMARY KEY,
        worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE,
        plan VARCHAR(50) NOT NULL,
        weekly_premium NUMERIC(10,2) NOT NULL,
        coverage_start TIMESTAMP NOT NULL,
        coverage_end TIMESTAMP NOT NULL,
        razorpay_payment_id VARCHAR(255),
        status VARCHAR(50) DEFAULT 'ACTIVE',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS claims (
        id SERIAL PRIMARY KEY,
        worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE,
        policy_id INTEGER REFERENCES policies(id) ON DELETE CASCADE,
        trigger_type VARCHAR(100) NOT NULL,
        trigger_value JSONB,
        risk_score INTEGER NOT NULL,
        status VARCHAR(50) NOT NULL,
        payout_amount NUMERIC(10,2) NOT NULL,
        razorpay_payout_id VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        resolved_at TIMESTAMP
      );

      CREATE TABLE IF NOT EXISTS location_logs (
        id SERIAL PRIMARY KEY,
        worker_id INTEGER REFERENCES workers(id) ON DELETE CASCADE,
        lat NUMERIC(10,8),
        lon NUMERIC(11,8),
        accuracy_meters NUMERIC(10,2),
        altitude NUMERIC(10,2),
        speed_reported NUMERIC(10,2),
        bearing NUMERIC(10,2),
        network_type VARCHAR(50),
        captured_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('Database tables successfully initialized.');
  } catch (error) {
    console.error('Error initializing database tables:', error);
  }
};

// Auto-run initialization
initDB();

module.exports = { pool };
