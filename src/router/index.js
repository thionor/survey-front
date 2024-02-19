import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/survey/create',
    name: 'surveyCreate',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/SurveyCreate.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
