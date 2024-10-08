import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index1',
      component: () => import('@/views/Index/Index.vue')
    },
    {
      path: '/index',
      name: 'index2',
      component: () => import('@/views/Index/Index.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/Register/Register.vue')
    },
    {
      path: '/front/blog/addBlogMDFile',
      name: 'addBlogMDFile',
      component: () => import('@/views/Blog/AddBlogMDFile.vue')
    },
    {
      path: '/front/blog/detail',
      name: 'BlogInfo',
      component: () => import('@/views/Blog/BlogInfo.vue')
    },
  ]
})

export default router
