import * as path from 'path'
import { cwd } from 'process'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import VueTypeImports from 'vite-plugin-vue-type-imports'

export default defineConfig(({ command, mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, cwd())

  return {
    // base: process.env.NODE_ENV === 'production' ? '/vue3-dz-ui/' : '',
    plugins: [vue(), DefineOptions(), VueTypeImports()],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      open: true,
    },
    define: {
      __APP_VERSION__: JSON.stringify({ version: '1.0.0' }),
      'process.env': process.env,
    },
  }
})
