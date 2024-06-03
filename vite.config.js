import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/contact": {
        target: "http://portfolio-contact.us-east-1.elasticbeanstalk.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/contact/, "/contact"),
      },
    },
  },
});
