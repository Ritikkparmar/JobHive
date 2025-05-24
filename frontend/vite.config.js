import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      '/user': {
        target: 'https://job-hive-backend.vercel.app',
        changeOrigin: true,
        secure: false,
      },
      '/job': {
        target: 'https://job-hive-backend.vercel.app',
        changeOrigin: true,
        secure: false,
      },
      '/application': {
        target: 'https://job-hive-backend.vercel.app',
        changeOrigin: true,
        secure: false,
      },
      '/company': {
        target: 'https://job-hive-backend.vercel.app',
        changeOrigin: true,
        secure: false,
      }
    },
  },
  optimizeDeps: {
    include: ['react-resizable']
  },
  build: {
    commonjsOptions: {
      include: [/react-resizable/, /node_modules/]
    },
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  }
})
