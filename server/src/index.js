const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const dotenv = require('dotenv');
const path = require('path');
const mongoose = require('mongoose');

dotenv.config({ path: path.join(__dirname, '../.env') });

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use((req, _res, next) => {
  console.log("[APP]", req.method, req.originalUrl);
  next();
});

// Rutas de autenticación
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

app.get('/api/ping', (req, res) => {
  res.status(200).json({ ok: true, pong: 'api' });
});

// Conectar a MongoDB antes de levantar el servidor
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/auth_mvp';

mongoose
  .connect(MONGODB_URI, { autoIndex: true })
  .then(() => {
    console.log('MongoDB ✓ conectado');
    app.listen(PORT, () => {
      console.log(`API listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB ✗ error:', err.message);
    process.exit(1);
  });
