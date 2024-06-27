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
    component: () => import('@/views/example02/EXample02-2.vue')
  },
  {
    path: '/example02-3',
    component: () => import('@/views/example02/EXample02-3.vue')
  },
  {
    path: '/example02-4',
    component: () => import('@/views/example02/EXample02-4.vue')
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
