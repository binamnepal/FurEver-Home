import { defineConfig } from 'vite'
import path from 'path'
import { BrowserRouter } from 'react-router-dom'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
