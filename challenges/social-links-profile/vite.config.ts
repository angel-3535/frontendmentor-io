import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/challenges/social-links-profile/",
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../../dist/challenges/social-links-profile",
    emptyOutDir: true
  }
});
