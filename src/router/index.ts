import { createRouter, createWebHistory, RouterView } from 'vue-router'
import Layout from '@/layout/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
    },
    {
      path: '/business-map',
      name: 'business-map',
      component: () => import('@/views/business-map/index.vue'),
    },
    {
      path: '/system-wallpaper',
      name: 'system-wallpaper',
      component: () => import('@/views/system-wallpaper/index.vue'),
    },
  ],
})

export default router
