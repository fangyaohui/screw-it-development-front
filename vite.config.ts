import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    host: '0.0.0.0', // 这个用于启动
    port: 8092, // 指定启动端口
    open: true, //启动后是否自动打开浏览器
    proxy:{
      '/screw':{
        target: 'http://localhost:61237',
        changeOrigin: true,
        secure: false, // 如果是https接口，需要配置这个参数
        // agent: new http.Agent(),
        rewrite:(path)=>path.replace(/^\/screw/,'') //api替换为'',
      }
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
