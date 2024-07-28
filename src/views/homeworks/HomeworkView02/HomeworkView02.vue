<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
const departmentVue = defineAsyncComponent(() => import('./DepartmentTeacherVue.vue'))
const loadingVue = defineAsyncComponent(() => import('@/components/LoadingVue.vue'))
import type { Teacher } from './type'
const departExpose = ref<{ teacher: Teacher }>()
</script>
<template>
  <div>
    <h1>Homework - 封装暴露组件数据对象</h1>
    <p>
      选择的教师：
      <span v-if="departExpose?.teacher.id">
        {{ departExpose?.teacher.name }} / {{ departExpose?.teacher.id }}
      </span>
    </p>
    <Suspense>
      <template #default>
        <!-- 通过ref属性绑定组件暴露的数据对象 -->
        <departmentVue ref="departExpose" />
      </template>
      <template #fallback>
        <loadingVue />
      </template>
    </Suspense>
  </div>
</template>

<!-- 
<Suspense> 组件
  <Suspense> 是 Vue 3 中引入的一个内置组件，用于处理异步组件的加载状态。它可以让你在等待异步组件加载完成时展示一些占位内容（通常是加载指示器），并在组件加载完成后展示实际的内容。

  <template #default>
  <template #default> 定义了默认插槽的内容，也就是当异步组件加载完成时显示的内容。
  <departmentVue ref="departExpose" /> 是一个异步组件，假设它是一个通过 defineAsyncComponent 或者动态导入的方式定义的组件。ref 属性在这里给 departmentVue 组件实例添加了一个引用，使得父组件可以通过 $refs.departExpose 访问到这个组件实例。
  
  <template #fallback>
  <template #fallback> 定义了回退插槽的内容，也就是当异步组件还在加载过程中时显示的内容。
  <loadingVue /> 是一个展示加载状态的组件，通常会是一个简单的加载动画或者文本提示。 -->
