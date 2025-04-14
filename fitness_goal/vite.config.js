import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Fitness_Goal_Tracker/fitness_goal/',
  css: {
    postcss: './postcss.config.cjs' // Spécifiez explicitement le chemin
  }
})