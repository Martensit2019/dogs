import { UserConfig } from 'vite'
// import Vue from '@vitejs/plugin-vue'

// -----------
import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'node:path'
import path from 'path'
// import 'virtual:svg-icons-register'


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// -----------

const config: UserConfig = {
  plugins: [
    vue(),
    Components({
      dts: true,
      types: [
        {
          from: 'vue',
          names: ['component']
        }
      ],
      dirs: ['src/components', 'src/layouts']
    }),
    AutoImport({
      eslintrc: {
        enabled: true
      },
      dts: true,
      imports: ['vue', 'vue-router', 'pinia']
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
    }),
    // createSvgIconsPlugin({
    //   // Specify the icon folder to be cached
    //   iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
    //   // Specify symbolId format
    //   symbolId: 'icon-[dir]-[name]',

    //   /**
    //    * custom insert position
    //    * @default: body-last
    //    */
    //   inject: 'body-last' 

  
    // }),
   
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
}

export default config
