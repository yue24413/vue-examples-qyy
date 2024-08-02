import type { Course } from '@/type'
import { ref } from 'vue'

const coursesSR = ref<Course[]>([])
const clearCache = () => (coursesSR.value = [])

const store = { coursesSR, clearCache }
export const useCoursesStore = () => store
