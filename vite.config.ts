import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@public': resolve(__dirname, './public'),
      '@pages': resolve(__dirname, './src/pages'),
      '@lib': resolve(__dirname, './src/lib')
    }
  }
})
