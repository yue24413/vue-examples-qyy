<template>
  <div>
    <ul>
      <li v-for="(c, index) of courses" :key="index">{{ c.name }}</li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { listCoursesService1 } from './Example15Service'
// Suspense内的组件，允许包含await阻塞函数异步加载组件
// 可基于具体逻辑决定是否使用store中的缓存数据。
const courses = await listCoursesService1()
</script>
