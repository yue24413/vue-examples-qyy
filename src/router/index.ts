import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

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
        component: () => import('@/views/exp03/ShopListView.vue')
      },
      {
        path: 'orders',
        component: () => import('@/views/exp03/OrderView.vue')
      }
    ]
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
export default router
