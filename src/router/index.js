import { createRouter, createWebHistory } from 'vue-router'
import GameView from '../views/GameView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/game',
      name: 'game',
      component: GameView
    },
    {
      path: '/auth',
      name: 'auth',
      component: LoginView
    }
  ]
})

export default router
