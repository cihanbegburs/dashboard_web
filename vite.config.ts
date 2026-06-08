import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 3001,
    host: '0.0.0.0',
    allowedHosts: [
      'dashboard.cihanbegburs.com.tr' // Bu hosta izin veriyoruz
    ],
    proxy: {
      '^/(auth|finance)': {
        target: mode === 'production'
          ? 'https://api.cihanbegburs.com.tr'
          : 'http://localhost:4001',
        changeOrigin: true,
        secure: false,
      }
    }
  }
}))