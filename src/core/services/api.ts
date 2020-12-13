import axios from 'axios'

const baseAPI = axios.create({
  baseURL: `${process.env.API_BASE_URL}`
})


import uaEndpoint from '@/core/config/_userstackFingerprint'
const uaAPI = axios.create({
  baseURL: uaEndpoint.userstackAPIfreePlan
})

export default {
  baseAPI,
  uaAPI
}