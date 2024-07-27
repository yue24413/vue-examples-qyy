<script setup lang="ts">
import SidebarView from '@/views/SidebarView.vue'
</script>

<template>
  <SidebarView id="sidebar" />
  <!-- <RouterView> 是Vue Router库自带的一个组件，用于在Vue应用中动态展示路由匹配到的组件。 -->
  <RouterView id="router" />
</template>

<style>
/* 最宽为全屏-y轴滚动条宽度 */
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  max-width: calc(100vw - 17px);
}
#app {
  /**横向弹性 */
  background-color: #ffee99;
  display: flex;
  margin: 10px auto;
}
#sidebar {
  width: 300px;
  border: 1px solid red;
  min-height: 600px;
  padding: 15px;
}
#router {
  border: 1px solid red;
  flex: 1;
  padding: 15px;
}
</style>
