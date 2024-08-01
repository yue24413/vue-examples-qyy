import { createServer, Response } from 'miragejs'
import { listCourses } from '@/datasource/DataSource'
import type { Course, User, ResultVO } from '@/type'
import * as consty from '@/datasource/Const'

const server = createServer({})
server.namespace = 'api'

server.get(
  'courses',
  () => {
    const resultVO: ResultVO<{ courses: Course[] }> = {
      code: 200,
      data: { courses: listCourses() }
    }
    return resultVO
  },
  { timing: 2000 }
)

//过滤原生GitHub请求
// server.passthrough('https://api.github.com/users/**')
