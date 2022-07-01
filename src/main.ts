import App from './App.vue'
import router from '@/router'
import '@/assets/css/base.less'
import '@/plugins/antd'

const msg2 = 'hello '

createApp(App).use(router).use(createPinia()).mount('#app')
