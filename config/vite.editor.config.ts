import { defineConfig } from 'vite'
import config from './vite.config'

import path from 'path'

const project = 'editor'
const root = path.resolve(process.cwd(), `src/${project}/`)


// https://vitejs.dev/config/
export default defineConfig({
  ...config,
  root,
  base: './',
  publicDir: `${root}public`,
  resolve: {
    alias: [
      {find: '@', replacement: root}
    ]
  },
  server: {
    host: '127.0.0.1',
    port: 3000
  },
  build: {
    outDir: `dist/${project}`
  }
})
