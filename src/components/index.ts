import svgIcon from './svgIcon/index.vue'
import type { App } from 'vue'

const allGlobalComponents: { [key: string]: any } = {
    svgIcon
}

export default {
    install(app: App) {
        console.log(app);
        Object.keys(allGlobalComponents).forEach(key => {
            app.component(key, allGlobalComponents[key])
        })
    }
}