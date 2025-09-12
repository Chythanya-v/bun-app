import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    proxy: { // if we send any request wih /api it will get forwarded to host with port 4000
      '/api': 'http://localhost:4000'
    }
  }
})
