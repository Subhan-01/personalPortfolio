import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/personalPortfolio/",  // 👈 GitHub Pages repo name directly
  plugins: [react(), tailwindcss()],
  server: {
    open: true,
    host: false,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
