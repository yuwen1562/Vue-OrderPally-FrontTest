import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Type1View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Type1',
      name: 'Type1',
      component: HomeView
    },
    {
      path: '/Type2',
      name: 'Type2',
      component: () => import('../views/Type2View.vue')
    },
    {
      path: '/Type3',
      name: 'Type3',
      component: () => import('../views/Type3View.vue')
    }
  ]
})

export default router
