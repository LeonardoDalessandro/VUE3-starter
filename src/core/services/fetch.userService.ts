import api from '@/core/services/api'
import AuthService from '@/core/services/authService'

import responseObj from '@/core/utils/returnResponseObj'


const entity = 'users'
const isAuth: boolean = AuthService.checkIsAuth()

async function getCurrent () {
  if (isAuth) {
    try {
      const response = await api.baseAPI.get(`${entity}/current`, AuthService.getAuthorization())
      const message = `Selected ${entity} updated`

      return responseObj._getResponseObj(response.status, message, response.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText

      return responseObj._getResponseObj(error.response.status, message, {})
    }
  }
}

export default {
  getCurrent
}