import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// This is a simplified config for Vercel deployment
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"), // Direct to dist for Vercel
    emptyOutDir: true,
  },
});