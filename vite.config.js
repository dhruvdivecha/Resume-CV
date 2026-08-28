import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Base path "./" keeps the build portable — works on GitHub Pages,
// Vercel, Netlify, or opened straight off disk.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
