import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['zod']
  },
  build: {
    commonjsOptions: {
      include: [/zod/, /node_modules/],
    }
  },
  server: {
    hmr: true
  }
})