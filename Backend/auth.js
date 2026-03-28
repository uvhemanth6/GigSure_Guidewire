// POST /api/auth/register
router.post('/register', async (req, res) => {
  const { name, mobile, platform, zone, city, daily_earnings, lat, lon } = req.body
  // Save to PostgreSQL
  // Return JWT token
})