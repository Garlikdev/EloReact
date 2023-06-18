import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@src": "/src",
      "@app": "/src/app",
      "@components": "/src/components",
      "@context": "/src/context",
      "@libs": "/src/libs",
      "@assets": "/public/assets",
    },
  },
})
