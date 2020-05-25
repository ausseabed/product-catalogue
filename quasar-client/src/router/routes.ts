import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/surveys',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Surveys.vue') }]
  },
  {
    path: '/survey-l3-relation',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ name: 'survey-l3-relation', path: '/survey-l3-relation/:surveyId', component: () => import('pages/SurveyL3Relation.vue') }]
  },
  {
    path: '/exports',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  },
  {
    path: '/health',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Index.vue') }]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
