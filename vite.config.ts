/// <reference types="vitest/config" />
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
// https://vite.dev/config/
import path from "node:path";
import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    Sitemap({
      hostname: "https://switchwon.vercel.app",
      dynamicRoutes: ["/"],
      exclude: [],
      outDir: "dist",
      changefreq: "daily",
      priority: 1.0,
      lastmod: new Date(),
      readable: true,
      generateRobotsTxt: false, // robots.txt는 public 폴더에서 직접 관리
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.js"],
  },
  resolve: {
    alias: [
      { find: "@shared", replacement: path.resolve(__dirname, "src/shared") },
    ],
  },
});
