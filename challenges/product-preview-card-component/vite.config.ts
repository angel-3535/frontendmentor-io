import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/challenges/product-preview-card-component/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../../dist/challenges/product-preview-card-component",
    emptyOutDir: true
  }
});
