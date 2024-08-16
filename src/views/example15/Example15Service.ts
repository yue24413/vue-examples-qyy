import { useGet } from '@/fetch'
import type { Course } from '@/type'
import { useExample15Store } from './Example15Store'

export const listCoursesService1 = async () => {
  const resp = await useGet<{ course: Course[] }>('courses')
  return resp.data.value?.data.course ?? []
}

export const listCoursesService2 = async () => {
  const resp = await useGet<{ courses: Course[] }>('courses')
  const coursesS = useExample15Store().coursesS
  coursesS.value = resp.data.value?.data.courses ?? []
  return true
}
