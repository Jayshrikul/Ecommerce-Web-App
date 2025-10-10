import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // ✅ ensures Vercel knows where to find the build
  },
  resolve: {
    alias: {
      '@': '/src', // optional, but nice for cleaner imports
    },
  },
})
