import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  rollupOptions: {
    output: {
      entryFileNames: `assets/[name].js`,
      assetFileNames: `assets/[name].[ext]`,
      manualChunks: undefined

    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
