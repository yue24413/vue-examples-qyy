import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import * as consty from '@/datasource/Const'
import { createAlertDialog } from '@/components/message'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/WelcomeView.vue')
  },
  {
    path: '/example01',
    component: () => import('@/views/example01/Example01-1.vue')
  },
  {
    path: '/example02-1',
    component: () => import('@/views/example02/Example02-1.vue')
  },
  {
    path: '/example02-2',
    component: () => import('@/views/example02/Example02-2.vue')
  },
  {
    path: '/example02-3',
    component: () => import('@/views/example02/Example02-3.vue')
  },
  {
    path: '/example02-4',
    component: () => import('@/views/example02/EXample02-4.vue')
    // children: [
    //   {
    //     path: '/AddUser',
    //     component: () => import('@/views/homework/UserChange/AddUserView.vue')
    //   },
    //   {
    //     path: 'DeleteUser',
    //     component: () => import('@/views/homework/UserChange/DeleteUserView.vue')
    //   },
    //   {
    //     path: 'UpdateUser',
    //     component: () => import('@/views/homework/UserChange/UpdateUserView.vue')
    //   }
    // ]
  },
  {
    path: '/example02',
    component: () => import('@/views/example02/EXample02.vue')
  },
  {
    path: '/example02-',
    component: () => import('@/views/example02/EXample02-.vue')
  },
  {
    path: '/example03-1',
    component: () => import('@/views/example03/Example03-1.vue')
  },
  {
    path: '/example04-1',
    component: () => import('@/views/example04/Example04-1.vue')
  },
  {
    path: '/example05-1',
    component: () => import('@/views/example05/Example05-1.vue')
  },
  {
    path: '/example05-2',
    component: () => import('@/views/example05/Example05-2.vue')
  },
  {
    path: '/example05-3',
    component: () => import('@/views/example05/Example05-3.vue')
  },
  {
    path: '/homework01',
    component: () => import('@/views/homeworks/HomeworkView01.vue')
  },
  {
    path: '/homework02',
    component: () => import('@/views/homeworks/HomeworkView02/HomeworkView02.vue')
  },
  {
    path: '/homework03',
    component: () => import('@/views/homeworks/homework03/IndexView.vue')
  },
  {
    path: '/homework04',
    component: () => import('@/views/homeworks/homework04/IndexView.vue')
  },
  {
    path: '/homework05',
    component: () => import('@/views/homeworks/HomeworkView05.vue')
  },
  {
    path: '/example08-1',
    component: () => import('@/views/example08/Example08-1.vue')
  },
  {
    path: '/example08-2',
    component: () => import('@/views/example08/Example08-2.vue')
  },
  {
    path: '/example08-3',
    component: () => import('@/views/example08/Example08-3.vue')
  },
  {
    path: '/example08-4',
    component: () => import('@/views/example08/Example08-4.vue')
  },
  {
    path: '/example09-1',
    component: () => import('@/views/example09/Example09-1.vue')
  },
  {
    path: '/example09-2',
    component: () => import('@/views/example09/Example09-2.vue')
  },
  {
    path: '/example09-3',
    component: () => import('@/views/example09/Example09-3.vue')
  },
  {
    path: '/example09-4',
    component: () => import('@/views/example09/Example09-4.vue')
  },
  {
    path: '/example09-5',
    component: () => import('@/views/example09/Example09-5.vue')
  },
  /******************************* */
  {
    path: '/exp03',
    component: () => import('@/views/exp03/HomeView.vue'),
    children: [
      {
        path: 'location',
        component: () => import('@/views/exp03/LocationView.vue')
      },
      {
        path: 'shoplist',
        component: () => import('@/views/exp03/ShopListView.vue')
      },
      {
        path: 'shops/:sid',
        component: () => import('@/views/exp03/ShopView.vue')
      },
      {
        path: 'orders',
        component: () => import('@/views/exp03/OrderView.vue')
      }
    ]
  },
  {
    path: '/example10-1',
    component: () => import('@/views/example10/Example10-1.vue')
  },
  {
    path: '/example10-2',
    component: () => import('@/views/example10/Example10-2.vue')
  },
  {
    path: '/example11-1',
    component: () => import('@/views/example11/Example11-1.vue')
  },
  {
    path: '/example11-2',
    component: () => import('@/views/example11/Example11-2.vue')
  },
  {
    path: '/example11-3',
    component: () => import('@/views/example11/Example11-3.vue')
  },
  {
    path: '/example12-1',
    component: () => import('@/views/example12/Example12-1.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/example12/CourseAbout.vue')
      },
      {
        path: 'course',
        components: {
          default: () => import('@/views/example12/CourseHome.vue'),
          button: () => import('@/views/example12/AddCourseButton.vue')
        }
      },
      {
        path: 'homework',
        components: {
          default: () => import('@/views/example12/CourseHomework.vue'),
          button: () => import('@/views/example12/AddHomeworkButton.vue')
        }
      }
    ]
  },
  {
    path: '/example13',
    component: () => import('@/views/example13/GuardContainer.vue'),
    children: [
      {
        name: 'login-g',
        path: 'login',
        component: () => import('@/views/example13/GuardLogin.vue')
      },
      {
        path: 'user',
        component: () => import('@/views/example13/GuardUser.vue'),
        meta: {
          role: consty.USER
        }
      },
      {
        path: 'admin',
        component: () => import('@/views/example13/GuardAdmin.vue'),
        meta: {
          role: consty.ADMIN
        }
      },
      {
        //未匹配路由 (nomatch).处理没有明确匹配到其他子路由的情况
        name: 'nomatch',
        path: ':pathMatch(.*)*', // 如果是全局匹配，应加上`/`，/:pathMatch(.*)*
        redirect: { name: 'login-g' }
      }
    ]
  },
  {
    path: '/example15-1',
    component: () => import('@/views/example15/Example15-1.vue')
  },
  {
    path: '/example15-2',
    component: () => import('@/views/example15/Example15-2.vue')
  },
  {
    path: '/example16',
    component: () => import('@/views/example16/Example16View.vue')
  },
  {
    path: '/example17',
    component: () => import('@/views/example17/Example17View.vue')
  },
  {
    path: '/CloudServer',
    component: () => import('@/views/CloudTechnologyManagement/CloudServer.vue')
  },
  {
    path: '/CloudDatabase',
    component: () => import('@/views/CloudTechnologyManagement/CloudDatabase.vue')
  },
  {
    path: '/LoadBalancing',
    component: () => import('@/views/CloudTechnologyManagement/LoadBalancing.vue')
  },
  {
    path: '/CloudShieldConsole',
    component: () => import('@/views/SafetyManagement/CloudShieldConsole.vue')
  },
  {
    path: '/DDoSHighlyImitatesIPAddresses',
    component: () => import('@/views/SafetyManagement/DDoSHighlyImitatesIPAddresses.vue')
  },
  {
    path: '/WebApplicationFirewall',
    component: () => import('@/views/SafetyManagement/WebApplicationFirewall.vue')
  },
  {
    path: '/CACertificateService',
    component: () => import('@/views/SafetyManagement/CACertificateService.vue')
  }
]
const router = createRouter({
  // HTML5 Mode。createWebHistory()函数，生产环境下需要web容器完成转发
  // createWebHashHistory()函数仍使用#符号，无需配置
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from) => {
  if (!to.meta.role) {
    return true
  }
  if (to.meta.role != sessionStorage.getItem('role')) {
    createAlertDialog('无权限')
    return { name: 'login-g' }
  }
  return true
})
export default router
