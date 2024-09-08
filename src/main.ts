import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'
import globalComponent from '@/components'
import '@/style/index.scss'
import router from './router'
import pinia from './store'

const app = createApp(App)

app.use(globalComponent)
app.use(router)
app.use(pinia)
app.use(ElementPlus, {
    locale: zhCn
})
app.mount('#app')
