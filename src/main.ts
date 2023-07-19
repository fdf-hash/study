import { createPinia } from 'pinia'
import { createApp,h } from 'vue'
import { RouterView } from 'vue-router'
import router from 'router'

// 创建app
const app = createApp({
    render: () => h(RouterView),
    inheritAttrs: false
  })

app.use(createPinia())
app.use(router)
app.mount('#app')