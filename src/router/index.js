import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/Dashboard.vue')
  },
  {
    path: '/surveycreate',
    name: 'surveycreate',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/SurveyCreate.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
