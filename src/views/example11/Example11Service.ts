import type { Course, User } from '@/type'
import { useExample11Store } from './Example11Store'
import { useGet, usePost } from '@/fetch'

// example11-1
export const listCoursesService = async (userId: number) => {
  const { data } = await useGet<{ courses: Course[] }>(`users/${userId}/courses`)
  return data.value?.data.courses ?? []
}
//loginService 函数接收一个对象作为参数，该对象有两个属性：number 和 password
export const loginService = async (user: { number: string; password: string }) => {
  //调用 usePost 函数时，期望的返回类型为 { user: User }
  const resp = await usePost<{ user: User }>('login', user)
  //从响应头部中提取 token，存储在 sessionStorage 中。为了后续请求中使用这个 token 来进行认证
  const token = resp.response.value?.headers.get('token')
  token && sessionStorage.setItem('token', token)
  const userS = useExample11Store().userS
  resp.data.value?.data && (userS.value = resp.data.value.data.user)
}

// example11-2
export const getHomeService = async () => {
  const resp = await useGet<{ courses: Course[] }>('home')
  useExample11Store().coursesS.value = resp.data.value?.data.courses ?? []
}
