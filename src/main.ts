import { createApp } from 'vue' /*从Vue库中导入了createApp */
import App from './App.vue' /* ./ 当前位置*/ /*导入了名为App.vue的组件文件，这是Vue应用的根组件 */
import router from './router'
const app = createApp(App) /*初始化 */
app.use(router) /**将前面导入的路由实例注入到Vue应用中 */
app.mount('#app') /**挂载之后，Vue应用就开始控制这个DOM元素， */
