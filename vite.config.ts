import { defineConfig, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((context) => {
  console.log(context)
  const commonConfig: UserConfigExport = {
    plugins: [
      vue({
        // 开启响应式语法糖
        reactivityTransform: true
      }),
    ],
    server: {
      port: 3000,
      open: true,
      host: true, // 导出
    }
  }

  return commonConfig
})
