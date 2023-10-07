import { createRouter, createWebHistory, RouterView } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RouterView,
    },
    {
      path: '/picture',
      name: 'picture',
      component: () => import('../views/msr-picture/index.vue'),
    },
    {
      path: '/picture2',
      name: 'picture2',
      component: () => import('../views/msr-picture/index.vue'),
    },
  ],
})

export default router
