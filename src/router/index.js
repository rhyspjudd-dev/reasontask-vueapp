import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DigiDivideView from '../views/DigiDivideView.vue'
import GetInvolvedView from '../views/GetInvolvedView.vue'
import InsightsView from '../views/InsightsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/thedigitaldivide',
    name: 'thedigitaldivide',
    component: DigiDivideView
  },
  {
    path: '/getInvolved',
    name: 'getInvolved',
    component: GetInvolvedView
  },
  {
    path: '/insights',
    name: 'insights',
    component: InsightsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
