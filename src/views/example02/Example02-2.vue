<template>
  <div>
    <!-- 显示总学分，颜色根据是否达到条件而变化 -->
    <div :style="{ color: totalCredit >= targetCredit ? 'green' : 'red' }">
      总学分: {{ totalCredit }} / {{ targetCredit }}
    </div>
    <!-- 显示所有课程 -->
    <div v-for="course in sortedCourses" :key="course.id">
      <label>
        <input type="checkbox" v-model="selectedCourses[course.id]" />
        {{ course.name }} - ({{ course.point }}学分) - {{ course.semester }}
      </label>
    </div>

    <!-- 已选课程 -->
    <ul>
      <li v-for="course in selectedSortedCourses" :key="course.id">
        {{ course.name }} ({{ course.point }}学分) - {{ course.semester }}
      </li>
    </ul>
  </div>
</template>
<script lang="ts" setup>
import { listCourses } from '@/datasource/DataSource'
import type { Course } from '@/type'
import { computed, ref } from 'vue'
const targetCredit = 17.5
const selectedCourses = ref({}) /**初始化空对象 */

const sortedCourses = computed(() => {
  return [...listCourses()].sort((a, b) => a.semester - b.semester)
})

const selectedSortedCourses = computed(() => {
  return sortedCourses.value.filter((course) => selectedCourses.value[course.id])
})
const totalCredit = computed(() => {
  return selectedSortedCourses.value.reduce((acc, course) => acc + course.point, 0)
})
</script>
