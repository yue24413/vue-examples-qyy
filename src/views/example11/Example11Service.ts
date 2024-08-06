import type { Course, User } from '@/type'
import { useExample11Store } from './Example11Store'
import { useGet, usePost } from '@/fetch'

// example11-1
export const listCoursesService = async (userId: number) => {
  const { data } = await useGet<{ courses: Course[] }>(`users/${userId}/courses`)
  return data.value?.data.courses ?? []
}
