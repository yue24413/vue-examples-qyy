<template>
  <div class="main">
    <!-- 显示总学分，颜色根据是否达到条件而变化 -->
    <div :style="{ color: totalCredit >= targetCredit ? 'green' : 'red' }">
      总学分: {{ totalCredit }} / {{ targetCredit }}
    </div>
    <!-- 显示所有课程 -->
    <div class="allCourse">
      <label v-for="course of sortedCourses" :key="course.id">
        <input type="checkbox" v-model="selectedCourses" :value="course" />
        {{ course.name }} - ({{ course.point }}学分) - {{ course.semester }}
      </label>
    </div>
    <br />
    <br />
    <!-- 已选课程 -->
    <div class="selCourse">
      <ul>
        <li v-for="course of selectedSortedCourses" :key="course.id">
          {{ course.name }} - ({{ course.point }}学分) - {{ course.semester }}
        </li>
      </ul>
    </div>
    <br />
  </div>
</template>
<script lang="ts" setup>
import { listCourses } from '@/datasource/DataSource'
import type { Course } from '@/type'
import { computed, ref } from 'vue'
const targetCredit = 8.5
const sortedCourses = computed(() => {
  return [...listCourses()].sort((a, b) => a.semester - b.semester)
})
console.log(sortedCourses)
console.log(sortedCourses.value)

const selectedCourses = ref<Course[]>([]) /**初始化空对象 显式声明类型 */

const selectedSortedCourses = computed(() => {
  return [...selectedCourses.value].sort((a, b) => (a.semester || 0) - (b.semester || 0))
})
const totalCredit = computed(() => {
  return selectedCourses.value.reduce((acc, course) => acc + (course.point || 0), 0)
})
</script>

<style scoped>
.allCourse {
  width: 300px;
  display: inline-block;
  border: 1px red solid;
}
.allCourse > label {
  display: inline-block;
  width: 100%;
}
.selCourse {
  display: inline-block;
  border: 1px red solid;
}
</style>
