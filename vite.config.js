import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner'
import pkg from './package.json'

const __dirname = dirname(fileURLToPath(import.meta.url))
const year = new Date().getFullYear()

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'VueStringDirectives',
      // the proper extensions will be added
      fileName: pkg.name
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['string-filters', 'vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'string-filters': 'StringFilters',
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    banner(
      `\n * Vue String Directives v${pkg.version}` +
      `\n * Homepage (${pkg.homepage})` +
      `\n * Copyright ${year} ${pkg.author}` +
      `\n * License: ${pkg.license}\n`
    )
  ]
})