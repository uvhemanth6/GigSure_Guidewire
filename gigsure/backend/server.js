const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
require('./db/db'); // Initialize DB

const authRoutes = require('./routes/auth');
const policyRoutes = require('./routes/policy');
const triggersRoutes = require('./routes/triggers');
const claimsRoutes = require('./routes/claims');

const app = express();

app.use(cors());
app.use(express.json());

// Main Routes
app.use('/api/auth', authRoutes);
app.use('/api/policy', policyRoutes);
app.use('/api/triggers', triggersRoutes);
app.use('/api/claims', claimsRoutes);

// Helper for health check
app.get('/health', (req, res) => res.json({ status: 'ok', time: new Date() }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 GigSure Backend running on http://localhost:${PORT}`);
});
