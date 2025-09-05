export default defineConfig({
  plugins: [react()],
  root: "client", 
  base: "./",              // relative paths
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "client/shared"),
      "@assets": path.resolve(__dirname, "client/attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"), // absolute path for Vercel
    emptyOutDir: true,
  },
});
