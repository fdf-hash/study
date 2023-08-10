import { createPinia } from 'pinia'
import { createApp, h } from 'vue'
import { RouterView } from 'vue-router'
import router from 'router'
import DevUI from 'vue-devui';
import 'styles/index.scss'
import 'vue-devui/style.css';
import '@devui-design/icons/icomoon/devui-icon.css';

// 创建app
const app = createApp({
  render: () => h(RouterView),
  inheritAttrs: false
})

app.use(createPinia())
app.use(router)
app.use(DevUI)
app.mount('#app')