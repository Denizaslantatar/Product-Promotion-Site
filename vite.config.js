import { fileURLToPath, URL } from 'node:url';
import viteCompression from "vite-plugin-compression";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 1212,
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false,
      },
    },
        devSourcemap: true,
      },
})
