import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiBase = env.VITE_API_BASE?.trim();
  const proxyTarget = env.VITE_API_PROXY_TARGET?.trim() || "https://koop-api-a28ac382dd56.herokuapp.com/api";
  const shouldProxy = !apiBase || apiBase.startsWith("/");

  return {
    plugins: [react()],
    server: {
      port: 5173,
      proxy: shouldProxy
        ? {
            "/api": {
              target: proxyTarget,
              changeOrigin: true,
            },
          }
        : undefined,
    },
  };
});
