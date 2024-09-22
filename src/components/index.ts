import svgIcon from './svgIcon/index.vue'
import type { App } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const allGlobalComponents: { [key: string]: any } = {
    svgIcon
}

export default {
    install(app: App) {
        console.log(app);
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key, allGlobalComponents[key])
        });
        for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}