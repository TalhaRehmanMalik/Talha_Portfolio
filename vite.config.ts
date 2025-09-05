import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  root: "client",
  base: "./", // 👈 ye add kiya for relative paths (Vercel me blank page fix)
  build: {
    outDir: "../dist", // build root ke bahar dist generate karega
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
})
