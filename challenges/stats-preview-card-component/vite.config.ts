import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/challenges/stats-preview-card-component/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../../dist/challenges/stats-preview-card-component",
    emptyOutDir: true
  }
});
