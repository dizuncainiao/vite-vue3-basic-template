import * as path from 'path'
import { cwd } from 'process'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import DefineOptions from 'unplugin-vue-define-options/vite'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig(({ command, mode }) => {
  const root = process.cwd()
  const env = loadEnv(mode, cwd())
  console.log('================================')
  console.log(command, root, env)
  console.log('================================')

  return {
    // base: process.env.NODE_ENV === 'production' ? '/vue3-dz-ui/' : '',
    plugins: [
      vue(),
      DefineOptions(),
      VueTypeImports(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            resolveIcons: true,
          }),
        ],
      }),
      AutoImport({
        imports: ['vue', 'pinia'],
        dts: 'src/auto-imports.d.ts',
        dirs: ['src/store'],
        vueTemplate: true,
      }),
    ],
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
