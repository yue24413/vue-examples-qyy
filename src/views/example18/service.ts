import { useExample18Store } from './store'
import { delCourseMock, getCourseMock, getUserMock, listCoursesMock } from './mock'
const store = useExample18Store()

// 必须将核心业务包裹在缓存判断之间
// 代码冗余
const listCoursesService = async () => {
  const coursesS = store.coursesS
  if (coursesS.value.length > 0) return coursesS
  coursesS.value = await listCoursesMock()
  return store.coursesS
}
