const express = require('express');
const { authenticate, requireAdmin } = require('../middleware/auth');

const router = express.Router();

// Proteger todas las rutas bajo /api/admin
router.use(authenticate, requireAdmin);

router.get('/ping', (req, res) => {
  res.json({ message: 'admin ok' });
});

router.get('/me', (req, res) => {
  const { sub, email, roles, iat, exp } = req.user || {};
  res.json({ id: sub, email, roles, iat, exp });
});

module.exports = router;

