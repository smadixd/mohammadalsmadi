import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

import { defineConfig, loadEnv } from "vite";

export default ({ mode }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    // To access env vars here use process.env.TEST_VAR
    plugins: [react(), viteCompression()],
    optimizeDeps: {
      include: ["react-icons"],
    },
    build: {
      cssMinify: true,
      minify: true,
    },
    css: {
      postcss: "./postcss.config.cjs",
    },
  });
};
