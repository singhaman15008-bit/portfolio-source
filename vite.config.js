import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  /*
   * GitHub Pages — user site.
   * This repo is served from the domain root (https://<user>.github.io/),
   * so assets resolve from "/". If you ever move the site into a project
   * repo (e.g. /portfolio/), change this to "/portfolio/".
   */
  base: '/',

  build: {
    outDir: 'dist',
    // GitHub Pages serves the repo root; assets keep readable names.
    assetsDir: 'assets',
  },
})
