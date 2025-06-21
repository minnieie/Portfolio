import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : "/Portfolio/", // base is '/' for dev, '/Portfolio/' for prod
  plugins: [react(), tailwindcss()],
}));
