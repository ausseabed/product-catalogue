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
    children: [
      { name: 'surveys', path: '/surveys', component: () => import('pages/Surveys.vue') },
      { name: 'survey-l3-relation', path: '/surveys/l3-relation/:relationId', component: () => import('pages/SurveyL3Relation.vue') }
    ]
  },
  {
    path: '/exports',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Exports.vue') }]
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
routes.push({
  path: '*',
  component: () => import('pages/Error404.vue')
})

export default routes
