import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/challenges/blog-preview-card/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../../dist/challenges/blog-preview-card",
    emptyOutDir: true
  }
});
