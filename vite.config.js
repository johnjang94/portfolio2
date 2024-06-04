import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

const env = dotenv.config().parsed;

export default () => {
  return defineConfig({
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
  });
};
