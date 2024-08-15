import { createAlertDialog } from '@/components/message/index'
import { createApp } from 'vue' /*从Vue库中导入了createApp */
import App from './App.vue' /* ./ 当前位置*/ /*导入了名为App.vue的组件文件，这是Vue应用的根组件 */
//import.meta.env.DEV && (await import('@/mock/index'))
import router from './router'
import('@/mock/index')

const app = createApp(App) /*初始化 */
app.use(router) /**将前面导入的路由实例注入到Vue应用中 */
app.mount('#app') /**挂载之后，Vue应用就开始控制这个DOM元素， */

// 全局未捕获异常处理
// 统一弹出错误信息模态框
app.config.errorHandler = (err) => {
  const message = err as string
  console.error(message)
  createAlertDialog(message)
}
