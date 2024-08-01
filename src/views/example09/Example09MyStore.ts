import type { Course } from '@/type'
import { ref } from 'vue'

export const useCoursesStore = () => {
  const coursesSR = ref<Course[]>([])
  const setCourses = (newCourses: Course[]) => (coursesSR.value = newCourses)
  const clearCache = () => (coursesSR.value = [])
  return {
    coursesSR,
    setCourses,
    clearCache
  }
}
