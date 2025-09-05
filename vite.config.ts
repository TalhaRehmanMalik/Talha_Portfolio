import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: "client",             // 👈 project root = client
  base: "./",                 // 👈 fix for blank page on Vercel
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "client/shared"),
      "@assets": path.resolve(__dirname, "client/attached_assets"),
    },
  },
  build: {
    outDir: "../dist",        // 👈 build output at repo root /dist
    emptyOutDir: true,
  },
});
