import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Evitar restauración automática de scroll del navegador
try { if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } } catch (_) {}

// SPA fallback para GitHub Pages: si llega ?p=/ruta desde 404.html, normaliza la URL
try {
  const params = new URLSearchParams(window.location.search);
  const p = params.get('p');
  if (p) {
    const base = (import.meta.env && import.meta.env.BASE_URL) || '/';
    const next = base.replace(/\/?$/, '/') + (p.startsWith('/') ? p.slice(1) : p);
    window.history.replaceState(null, '', next);
  }
} catch (_) {}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
