import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000, // Cambie el número de puerto a la que desee
  },
  plugins: [react()],
})
