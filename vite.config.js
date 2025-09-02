import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Sitio servido en dominio personalizado (raíz)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
