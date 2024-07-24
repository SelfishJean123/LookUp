import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "public/assets"),
      "@styles": path.resolve(__dirname, "public/styles"),
    },
  },
});
