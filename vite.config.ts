import * as path from 'path'
import { cwd } from 'process'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

import VueTypeImports from 'vite-plugin-vue-type-imports'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, cwd())
  console.log(command, env)

  return {
    plugins: [vue(), VueTypeImports()],
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      open: true,
      proxy: {
        '/v1': 'http://192.168.21.38:1988',
        '/bdsaas': 'https://vip.bdsaas.com'
      }
    },
    define: {
      __APP_VERSION__: JSON.stringify({ name: 'vite-demo', version: '1.0.0' }),
      'process.env': process.env
    }
  }
})
