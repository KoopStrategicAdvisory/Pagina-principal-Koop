import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use base only for production build (GitHub Pages).
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/Pagina-principal-Koop/' : '/',
}));
