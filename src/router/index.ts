import { createRouter, createWebHistory } from 'vue-router'

// Core base routes
import baseRoutes from '@/core/router/base.route.map'

// App project routes
import routeMap from '@/router/routes'

const routes = [...routeMap.map, ...baseRoutes.map];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes
})

export default router
