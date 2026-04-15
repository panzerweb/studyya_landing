import Contact_screen from '@/pages/Contact_screen.vue'
import Contribute_screen from '@/pages/Contribute_screen.vue'
import Get_App from '@/pages/Get_App.vue'
import Home_screen from '@/pages/Home_screen.vue'
import Pricing_screen from '@/pages/Pricing_screen.vue'
import Team_screen from '@/pages/Team_screen.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // Home screen
      path: '/',
      component: Home_screen,
    },
    // Contribute screen
    {
      path: '/contribute',
      component: Contribute_screen,
    },

    // Team screen
    {
      path: '/team',
      component: Team_screen,
    },
    // Pricing screen
    {
      path: '/pricing',
      component: Pricing_screen,
    },
    // Contact screen
    {
      path: '/contact',
      component: Contact_screen,
    },

    // Get App screen
    {
      path: '/getapp',
      component: Get_App,
    },
  ],
})

export default router
