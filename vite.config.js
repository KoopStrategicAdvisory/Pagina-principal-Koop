import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "https://koop-api-a28ac382dd56.herokuapp.com/",
        changeOrigin: true
      }
    }
  }
});
