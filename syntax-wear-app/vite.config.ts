import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type PluginOption } from 'vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss() as unknown as PluginOption],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
