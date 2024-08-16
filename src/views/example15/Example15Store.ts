import type { Course } from '@/type'
import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'

export const useExample15Store = createGlobalState(() => {
  const coursesS = ref<Course[]>([])
  return {
    coursesS
  }
})
