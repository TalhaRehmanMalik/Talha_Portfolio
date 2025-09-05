import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  root: "client",
  base: "./", // relative paths for vercel
  build: {
    outDir: "dist", // ✅ ab dist client ke andar banega
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
})
