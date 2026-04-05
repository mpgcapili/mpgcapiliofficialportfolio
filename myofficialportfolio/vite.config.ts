import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Ensure this is just a forward slash
  plugins: [react()],
  server:{
    host: true,
  },
})
