import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TechnologyView from '../views/TechnologyView.vue'
import BusinessView from '../views/BusinessView.vue'
import HealthView from '../views/HealthView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/technology/:name',
    name: 'technology',
    component: TechnologyView
  },
  {
    path: '/business/:name',
    name: 'business',
    component: BusinessView
  },
  {
    path: '/health/:name',
    name: 'health',
    component: HealthView
  },
  {
    path: '/about/:name',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
