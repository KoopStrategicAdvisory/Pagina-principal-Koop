import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Evitar restauración automática de scroll del navegador
try { if ('scrollRestoration' in history) { history.scrollRestoration = 'manual'; } } catch (_) {}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
