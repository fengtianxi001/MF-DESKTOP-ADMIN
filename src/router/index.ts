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
      path: '/business-vr',
      name: 'business-vr',
      component: () => import('@/views/business-vr/index.vue'),
    },
    {
      path: '/business-device',
      name: 'business-device',
      component: () => import('@/views/business-device/index.vue'),
    },
    {
      path: '/business-warning',
      name: 'business-warning',
      component: () => import('@/views/business-warning/index.vue'),
    },
    {
      path: '/system-wallpaper',
      name: 'system-wallpaper',
      component: () => import('@/views/system-wallpaper/index.vue'),
    },
  ],
})

export default router
