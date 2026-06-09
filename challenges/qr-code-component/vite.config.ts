import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/challenges/qr-code-component/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../../dist/challenges/qr-code-component",
    emptyOutDir: true
  }
});
