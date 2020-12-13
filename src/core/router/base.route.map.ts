import { RouteRecordRaw } from 'vue-router'
import viewsBaseMap from '@/core/views/base.views.map'

const map: Array<RouteRecordRaw> = [
  {
    path: '/newhome',
    name: 'NewHome',
    component: viewsBaseMap.HomePage
  }
]

export default {
  map
}