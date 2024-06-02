import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
    resolve: {
    alias: {
      '@': '/src' // تأكد من تعديل المسار بناءً على بنية مشروعك
    }
  }
})

