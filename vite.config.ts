import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8000,
  },
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
  plugins: [vue()],
})
