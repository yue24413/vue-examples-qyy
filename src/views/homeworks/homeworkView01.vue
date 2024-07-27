<template>
  <div>
    <p>
      <span
        v-for="(c, index) of components"
        :key="index"
        @click="currentIndexR = index"
        :style="{
          color: activeStyleC(index).color,
          'text-decoration': activeStyleC(index).dec,
          cursor: 'pointer',
          'margin-right': '10px'
        }">
        {{ c.name }}
      </span>
    </p>
    <br />
    <br />
    {{ currentIndexR }}
    <p>
      <component :is="currentComponentC" />
    </p>
    <br />
    <br />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent, type Component, ref, computed } from 'vue'

const components: { name: string; component: Component }[] = [
  {
    name: '添加用户',
    component: defineAsyncComponent(() => import('../homework/UserChange/AddUserView.vue'))
  },
  {
    name: '移除用户',
    component: defineAsyncComponent(() => import('../homework/UserChange/DeleteUserView.vue'))
  },
  {
    name: '更新用户',
    component: defineAsyncComponent(() => import('../homework/UserChange/UpdateUserView.vue'))
  }
]
const currentIndexR = ref(0)
const activeStyleC = computed(
  () => (index: Number) =>
    index === currentIndexR.value
      ? { color: 'red', dec: 'underline' }
      : { color: 'black', dec: 'none' }
)
const currentComponentC = computed(() => components[currentIndexR.value]?.component)

/***************************** */

/**1. defineAsyncComponent
  defineAsyncComponent 是 Vue 3 中用于创建异步组件的方法。它允许你在组件加载时按需加载，而不是一开始就加载所有的组件代码。这对于大型应用特别有用，因为它可以减少初始加载时间，并优化性能。
  
  2. 参数
  defineAsyncComponent 接受一个工厂函数作为参数。这个工厂函数会在组件首次被激活时调用，返回一个 Promise，该 Promise 解析后返回一个组件定义。
  
  3. 工厂函数
  Javascript
  () => import('../homework/UserChange/AddUserView.vue')
  这是一个箭头函数，它使用 ES6 的 import() 函数来动态导入组件。import() 返回一个 Promise，这个 Promise 会在文件加载完成后解析为模块的导出对象。 */
</script>
