import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'styles': path.resolve(__dirname, '/src/assets/styles')
    }
  },
  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Replace with your actual backend API URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/static/mock')
      },
      // You can add more proxy rules here
    }
  }
})

