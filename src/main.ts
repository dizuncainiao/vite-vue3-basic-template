import './assets/main.css'
/*插件相关（需要进行初始化、引入的）*/
import '@/plugins'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
