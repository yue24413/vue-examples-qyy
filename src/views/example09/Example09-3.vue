<template>
  <div>
    <h1>defineExpose()</h1>
    <p>父组件通过ref属性绑定获取子组件引用，但仅能使用子组件暴露的属性</p>
    <p><button @click="exposeR?.stopLoop">执行子组件暴露的函数</button></p>
    <p>{{ exposeR?.userR?.name }}</p>
    <expose ref="exposeR" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import expose from './ExposeLoop3.vue'
const exposeR = ref<{ userR?: { name: '' }; stopLoop?: () => void }>({})
/**stopLoop 是一个不接受任何参数并且没有返回值的函数。 */
</script>
