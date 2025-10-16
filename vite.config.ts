import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'works/d2l': resolve(__dirname, 'works/d2l/index.html'),
        'works/safina': resolve(__dirname, 'works/safina/index.html'),
        'works/onlinegps': resolve(__dirname, 'works/onlinegps/index.html'),
        'works/printon': resolve(__dirname, 'works/printon/index.html'),
        'works/superalink': resolve(__dirname, 'works/superalink/index.html'),
      },
    },
  },
})
