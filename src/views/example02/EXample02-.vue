<template>
  <div>
    <form>
      <input type="text" v-model="userR.name" />
      <br />
      <label>
        <input type="radio" v-model="userR.sex" value="male" />
        男
      </label>
      <label>
        <input type="radio" v-model="userR.sex" value="female" />
        女
      </label>
      <br />
      <select v-model="userR.title">
        <option v-for="(t, index) of titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>
      <br />
      <!-- userR.title 的值会被设置为所选 option 的 value,若无value，默认为文本内容为其值 -->
      (log)userR.title:{{ userR.title }}
      <br />
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="userR.courses" :value="{ id: c.id }" />
          {{ c.name }}
        </label>
        <br />
      </template>
      (log)userR.courses: {{ userR.courses }}
      <br />
      <br />
      (log)userR: {{ userR }}
      <br />
      <br />
      <input type="file" @change="fileChangeF" />
      <br />
      (log)fileName: {{ fileR.fileName }}
      <br />
      (log)fileSize: {{ fileR.fileSize }}
    </form>
    <hr />
    <br />
    <form>
      <label>
        <input type="checkbox" v-model="agreedR" />
        同意条款
      </label>
      &nbsp;&nbsp;&nbsp;(log)agreedR: {{ agreedR }}
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input
            type="checkbox"
            ref="checkboxsR"
            v-model="courseR"
            :value="{ id: c.id }"
            :disabled="checkboxDisabled(index)" />
          {{ c.name }}
        </label>
        <br />
      </template>
      (log)courseR:{{ courseR }}
      <br />
      <br />
      <button type="button" :disabled="buttonDisabledC">submit</button>
    </form>
  </div>
</template>
<script lang="ts" setup>
import { listCourses, listTitles } from '@/datasource/DataSource'
import { computed, ref } from 'vue'
import type { Course, User } from '@/type'

const userR = ref<User>({ courses: [] })
const fileR = ref({ fileName: '', fileSize: '' })
const titles = listTitles()
const courses = listCourses()
const fileChangeF = (event: Event) => {
  const element =
    event.target as HTMLInputElement /**从事件对象 event 中获取触发事件的目标元素，并将其类型断言为 HTMLInputElement */
  if (!element || !element.files) {
    /**检查 element 是否存在并且 files 属性是否包含文件 */
    return
  }
  fileR.value.fileName = element.files[0].name
  fileR.value.fileSize = `${(element.files[0].size / 1024 / 1024).toFixed(2)} MB`
} /**计算文件的大小（单位为 MB），并格式化为两位小数的字符串 */
/**toFixed(2) 是 JavaScript 中 Number 类型的一个方法，用于将数字格式化为具有固定小数位数的字符串。这里的 2 表示你希望保留的小数位数。 */

/************************************************** */

const agreedR = ref(false)
const courseR = ref<Course[]>([])
const amount = 2
const checkboxsR = ref<HTMLInputElement[]>([])
const checkboxDisabled = computed(
  () => (index: number) =>
    !agreedR.value || (courseR.value.length >= amount && !checkboxsR.value[index].checked)
)
const buttonDisabledC = computed(() => !agreedR.value || courseR.value.length < amount)

/**ref="checkboxsR" ref: 使用 ref 可以让你在 Vue 组件的方法中直接访问 DOM 元素。 */
</script>
