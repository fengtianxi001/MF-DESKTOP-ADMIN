import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ArcoVue from '@arco-design/web-vue'
import 'animate.css'
import '@/assets/styles/reset.scss'
import '@arco-design/web-vue/dist/arco.less'
import './assets/fontawesome/css/all.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ArcoVue)
app.mount('#app')
