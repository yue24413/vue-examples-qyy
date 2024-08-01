import type { Course } from '@/type'

export const listCoursesMock = async () => {
  const courses = [
    {
      id: 100,
      name: '数据库原理',
      point: 3.0,
      semester: 4 /**学期 */
    },
    {
      id: 101,
      name: '影视赏析',
      point: 1.5,
      semester: 5
    },
    {
      id: 102,
      name: 'Web系统框架',
      point: 2.5,
      semester: 6
    },
    {
      id: 103,
      name: '托福阅读',
      point: 2.0,
      semester: 5
    },
    {
      id: 104,
      name: 'Web开发技术',
      point: 2.5,
      semester: 4
    },
    {
      id: 105,
      name: '高级英语视听',
      point: 2.0,
      semester: 6
    }
  ]
  return new Promise<Course[]>((resolve) => {
    setTimeout(() => {
      resolve(courses)
    }, 1000)
  })
}
