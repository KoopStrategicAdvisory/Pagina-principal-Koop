const jwt = require('jsonwebtoken');

function authenticate(req, res, next) {
  try {
    const header = req.headers['authorization'] || '';
    const parts = header.split(' ');
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return res.status(401).json({ message: 'No autenticado.' });
    }
    const token = parts[1];
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = payload; // { sub, email, roles, iat, exp }
    next();
  } catch (err) {
    if (err && err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expirado.' });
    }
    return res.status(401).json({ message: 'Token inválido.' });
  }
}

function requireRoles(...required) {
  const requiredLower = required.map((r) => String(r).toLowerCase());
  return function (req, res, next) {
    const roles = Array.isArray(req.user?.roles) ? req.user.roles : [];
    const rolesLower = roles.map((r) => String(r).toLowerCase());
    const ok = requiredLower.some((r) => rolesLower.includes(r));
    if (!ok) return res.status(403).json({ message: 'No autorizado.' });
    next();
  };
}

const requireAdmin = requireRoles('admin');

module.exports = { authenticate, requireRoles, requireAdmin };

