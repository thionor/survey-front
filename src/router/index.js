import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/surveys/:id',
    name: 'surveyCreate',
    component: () => import('../views/admin/SurveyCreate.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/admin/User.vue')
  },
  {
    path: '/companies',
    name: 'companies',
    component: () => import('../views/admin/Company.vue')
  },
  {
    path: '/',
    name: 'surveys',
    component: () => import('../views/admin/Survey.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
