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
    <p>
      <component :is="currentComponentC" />
    </p>
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
// 加载组件索引
const currentIndexR = ref(0)
// 基于索引动态加载组件
const currentComponentC = computed(() => components[currentIndexR.value]?.component)
// 激活状态组件文字颜色
const activeStyleC = computed(
  () => (index: number) =>
    index == currentIndexR.value
      ? { color: 'red', dec: 'underline' }
      : { color: 'black', dec: 'none' }
)
</script>
