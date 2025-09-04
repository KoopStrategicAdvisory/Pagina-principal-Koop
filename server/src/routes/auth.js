const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Debug: traza todo lo que entra al router de /api/auth
router.use((req, _res, next) => {
  console.log("[AUTH ROUTER]", req.method, req.originalUrl);
  next();
});

const ACCESS_TOKEN_EXPIRES_IN = process.env.ACCESS_TOKEN_EXPIRES_IN || '15m';
const REFRESH_TOKEN_EXPIRES_IN = process.env.REFRESH_TOKEN_EXPIRES_IN || '7d';
const ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS || '10', 10);

// Helper to sign tokens
function signAccessToken(user) {
  const payload = {
    sub: user._id.toString(),
    name: user.name,
    roles: user.roles,
    email: user.email,
  };
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRES_IN,
  });
}

function signRefreshToken(user) {
  const payload = {
    sub: user._id.toString(),
    type: 'refresh',
  };
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_EXPIRES_IN,
  });
}

// Cookie options for refresh token
function getRefreshCookieOptions() {
  const isProd = process.env.NODE_ENV === 'production';
  const weekMs = 7 * 24 * 60 * 60 * 1000;
  return {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'none' : 'lax',
    maxAge: weekMs,
    path: '/',
  };
}

function clearRefreshCookie(res) {
  const opts = getRefreshCookieOptions();
  // Use same attributes to ensure the browser clears it
  res.clearCookie('refreshToken', {
    httpOnly: opts.httpOnly,
    secure: opts.secure,
    sameSite: opts.sameSite,
    path: opts.path,
  });
}

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, roles } = req.body || {};

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Nombre, email y password son requeridos.' });
    }

    const normalizedEmail = String(email).toLowerCase().trim();
    if (password.length < 8) {
      return res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres.' });
    }

    const existing = await User.findOne({ email: normalizedEmail }).lean();
    if (existing) {
      return res.status(409).json({ message: 'El email ya está registrado.' });
    }

    const passwordHash = await bcrypt.hash(password, ROUNDS);

    const user = await User.create({
      name: String(name).trim(),
      email: normalizedEmail,
      passwordHash,
      roles: Array.isArray(roles) && roles.length ? roles : undefined,
    });

    // Emitir tokens y cookie como en login
    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);
    res.cookie('refreshToken', refreshToken, getRefreshCookieOptions());

    console.log("[AUTH] register REAL hit:", req.body?.email);
    res.set("X-Handler", "register-real");
    return res.status(201).json({
      source: "register-real",
      message: 'Usuario registrado correctamente.',
      accessToken,
      user: { id: user._id, name: user.name, email: user.email, roles: user.roles },
    });
  } catch (err) {
    if (err && err.code === 11000) {
      return res.status(409).json({ message: 'El email ya está registrado.' });
    }
    console.error('Register error:', err);
    return res.status(500).json({ message: 'Error en el servidor.' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    if (!email || !password) {
      return res.status(400).json({ message: 'Email y password son requeridos.' });
    }

    const normalizedEmail = String(email).toLowerCase().trim();
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas.' });
    }

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);

    res.cookie('refreshToken', refreshToken, getRefreshCookieOptions());
    return res.status(200).json({
      message: 'Login correcto.',
      accessToken,
      user: { id: user._id, name: user.name, email: user.email, roles: user.roles },
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Error en el servidor.' });
  }
});

// POST /api/auth/logout
router.post('/logout', async (_req, res) => {
  try {
    clearRefreshCookie(res);
    return res.status(200).json({ message: 'Logout correcto.' });
  } catch (err) {
    console.error('Logout error:', err);
    return res.status(500).json({ message: 'Error en el servidor.' });
  }
});

// POST /api/auth/refresh
router.post('/refresh', async (req, res) => {
  try {
    const token = req.cookies?.refreshToken;
    if (!token) return res.status(401).json({ message: 'No hay refresh token.' });
    let payload;
    try {
      payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    } catch (err) {
      return res.status(401).json({ message: 'Refresh token inválido.' });
    }
    if (payload?.type !== 'refresh') {
      return res.status(400).json({ message: 'Tipo de token inválido.' });
    }

    const user = await User.findById(payload.sub);
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado.' });
    }

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);
    res.cookie('refreshToken', refreshToken, getRefreshCookieOptions());
    res.set('X-Handler', 'refresh');
    return res.status(200).json({
      accessToken,
      user: { id: user._id, name: user.name, email: user.email, roles: user.roles },
    });
  } catch (err) {
    console.error('Refresh error:', err);
    return res.status(500).json({ message: 'Error en el servidor.' });
  }
});

module.exports = router;
