import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use mode to decide base. Build with `--mode ghpages` for GitHub Pages.
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'ghpages' ? '/Pagina-principal-Koop/' : '/',
}));
