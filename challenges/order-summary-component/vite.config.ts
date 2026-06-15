import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/challenges/order-summary-component/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../../dist/challenges/order-summary-component",
    emptyOutDir: true
  }
});
