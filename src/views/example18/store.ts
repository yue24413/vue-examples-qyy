import { ref } from 'vue'
import type { Course, User } from '@/type/index'
const userS = ref<User>()
const coursesS = ref<Course[]>([])
const courseMaps = ref<Map<string, Course>>(new Map())

const clear = () => {
  coursesS.value = []
  courseMaps.value.clear()
  userS.value = undefined
}
const store = { userS, coursesS, courseMaps, clear }
export const useExample18Store = () => store
