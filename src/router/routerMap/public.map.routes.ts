import { RouteRecordRaw } from 'vue-router'
import viewsMap from '@/views/views.map'

const publicMap: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: viewsMap.HomeStart
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/default/About.vue')
  }
]

export default {
  publicMap
}