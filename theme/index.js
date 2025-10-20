// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
    ...DefaultTheme,
    // 可以在这里扩展主题组件
    enhanceApp({ app }) {
        // 注册全局组件
    }
}