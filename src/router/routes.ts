import publicRoutesMap from '@/router/routerMap/public.map.routes'
import privateRoutesMap from '@/router/routerMap/private.map.routes'

const publicMap = publicRoutesMap.publicMap
const privateMap = privateRoutesMap.privateMap

const map = [...publicMap, ...privateMap]

export default {
  map
}