import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import CityView from '../views/city/CityView.vue'
import DetailView from '../views/detail/DetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/city',
      name: 'City',
      component: CityView
    },
    {
      path: '/detail',
      name: 'Detail',
      component: DetailView
    }
  ]
})

export default router
