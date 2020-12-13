import axios from 'axios'

const baseAPI = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`
})


import uaEndpoint from '@/core/config/_userstackFingerprint'
const uaAPI = axios.create({
  baseURL: uaEndpoint.userstackAPIfreePlan
})

export default {
  baseAPI,
  uaAPI
}