import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { process } from "process";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/contact": {
          target: env.VITE_BACKEND_PROXY2,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/contact/, "/contact"),
        },
      },
    },
  };
});
