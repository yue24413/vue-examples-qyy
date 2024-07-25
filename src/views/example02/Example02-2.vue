<template>
  <div class="main">
    <!-- 显示总学分，颜色根据是否达到条件而变化 -->
    <div :style="{ color: totalCredit >= targetCredit ? 'green' : 'red' }">
      总学分: {{ totalCredit }} / {{ targetCredit }}
    </div>
    <!-- 显示所有课程 -->
    <div class="allCourse">
      <!-- 遍历数组用v-for...of -->
      <label v-for="course of sortedAllCourses" :key="course.id">
        <input type="checkbox" v-model="selectedCourses" :value="course" />
        {{ course.name }} - ({{ course.point }}学分) - {{ course.semester }}
      </label>
    </div>
    <br />
    <br />
    <!-- 已选课程 -->
    <div class="selCourse">
      <ul>
        <li v-for="course of selectedCourses" :key="course.id">
          {{ course.name }} - ({{ course.point }}学分) - {{ course.semester }}
        </li>
      </ul>
    </div>
    <br />
    {{ selectedCourses }}
    <br />
    <br />
    <!-- {{ sortedAllCourses }}
    <br />
    <br />
    {{ selectedSortedCourses }} -->
    <br />
  </div>
</template>
<script lang="ts" setup>
import { listCourses } from '@/datasource/DataSource'
import type { Course } from '@/type'
import { computed, ref, watch } from 'vue'
const targetCredit = 8.5
const sortedAllCourses = [...listCourses()].sort((a, b) => a.semester - b.semester)
/***************************************************** */

const selectedCourses = ref<Course[]>([]) /**初始化空对象 显式声明类型 */

const totalCredit = ref(0)

watch(
  /**箭头函数做参数,监听selectedCourses.length */
  /**第一个参数应该是响应式引用或者是一个 getter 函数 */
  () => selectedCourses.value.length,
  (newLength, oldLength) => {
    if (newLength !== oldLength) {
      // 长度发生变化时,执行
      /**数组的sort对自身排序有，与集合区分 */
      selectedCourses.value.sort((a, b) => (a.semester || 0) - (b.semester || 0))
      totalCredit.value = selectedCourses.value.reduce(
        (acc, course) => acc + (course.point || 0),
        0
      )
    }
  }
)

// watch(selectedCourses, (newCou, oldCou) => {
//   selectedCourses.value = [...newCou].sort((a, b) => (a.semester || 0) - (b.semester || 0))
//   /**不可在 watch 回调中修改 selectedCourses直接进行排序，因为正在监听 selectedCourses 的变化 */
//   totalCredit.value = newCou.reduce((acc, course) => acc + (course.point || 0), 0)
// })

/*直接监听响应式引用：如果你需要监听整个响应式对象或数组的所有变化，可以直接传入这个引用。
   使用 getter 函数：如果你只关心某个特定属性的变化，如长度或其他特定属性，应该使用 getter 函数。 */
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
