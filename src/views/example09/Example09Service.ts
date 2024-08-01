import { listCourses } from '@/datasource/DataSource'
import { useExample09Store } from './Example09Store'

import { useCoursesStore } from './Example09MyStore'
import type { Course } from '@/type'
import { listCoursesMock } from './Example09Mock'

export const listCoursesService = async () => {
  const coursesS = useExample09Store().coursesS
  if (coursesS.value.length == 0) {
    coursesS.value = await listCoursesMock()
  }
  return coursesS
}

// export const listCoursesService = async () => {
//   // 尝试从本地存储中获取缓存数据
//   const cachedCourses = JSON.parse(localStorage.getItem('coursesCache') || '')
//   if (!cachedCourses ) {
//     store.setCourses(cachedCourses)
//   } else {
//     const courses = await listCoursesMock()
//     store.setCourses(courses)
//     // 将数据缓存到本地存储
//     localStorage.setItem('coursesCache', JSON.stringify(courses))
//   }
// }

// export const listCoursesService = () => {
//   const coursesS = useExample09Store().coursesS
//   // 模拟业务逻辑处理，网络延迟获取数据
//   // 获取到数据后响应式改变store中数据
//   setTimeout(() => (coursesS.value = listCourses()), 1000)
// }

// 不使用store。基于Promise模拟异步函数获取数据，将数据直接返给组件

export const listCoursesService2 = async () => {
  return new Promise<Course[]>((resolve) => {
    setTimeout(() => resolve(listCourses()), 2000)
  })
}
