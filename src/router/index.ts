import Home_screen from '@/pages/Home_screen.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home_screen,
    },
  ],
})

export default router
