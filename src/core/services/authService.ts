import api from '@/core/services/api'
import securityService from '@/core/services/securityService'

import responseObj from '@/core/utils/returnResponseObj'
import $store from '@/store/index'

import { AuthinputDataInterface } from '@/core/models/authModels'


let BEARER: string = ''
let isAuth: boolean = false

/**
 ******************************
  * @API
  ******************************
  */

async function makeLogin (data:AuthinputDataInterface) {
  try {
    const fingerprint = await securityService.getFingerPrint()
    const response = await api.baseAPI.post(`${process.env.API_BASE_URL}/auth/login`,
      { data, fingerprint },
      { withCredentials: true })
    const token = response.data.data.accessToken

    _setAuthData(token)
    const message = `Login success`

    return responseObj._getResponseObj(response.status, message, {})
  } catch (error) {
    const message = `Login fail`

    return responseObj._getResponseObj(error.response.status, message, {})
  }
}

async function makeLogout () {
  try {
    const response = await api.baseAPI.post('auth/logout', {}, { withCredentials: true })
    _resetAuthData()
    //TODO: understand how redirect programaticaly from here
    //this.$router.push({ name: 'login' }).catch(() => {}) 
    const message = `Logout success`

    return responseObj._getResponseObj(response.status, message, {})
  } catch (error) {
    const message = `Logout fail`

    return responseObj._getResponseObj(error.response.status, message, {})
  }
}


/**
 ******************************
  * @METHODS
  ******************************
  */

function getBearer () {
  return BEARER
}

function setBearer (accessToken:string) {
  BEARER = `Bearer ${accessToken}`
}

function getIsAuth () {
  return isAuth
}

function setIsAuth (val:boolean) {
  isAuth = val
}

/**
 ******************************
 * @private_methods
 ******************************
 */

function _resetAuthData () {
  $store.commit('user/SET_CURRENT_USER', {})

  // reset tokens
  setBearer('')
  setIsAuth(false)
}

function _setAuthData (accessToken:string) {
  setBearer(accessToken)
  setIsAuth(true)
}

export default {
  makeLogin,
  makeLogout,
  getBearer,
  getIsAuth
}