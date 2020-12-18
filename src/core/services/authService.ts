import api from '@/core/services/api'
import securityService from '@/core/services/securityService.userAgent'

import responseObj from '@/core/utils/returnResponseObj'
import $store from '@/store/index'

import { AuthinputDataInterface } from '@/core/models/authModels'


let isAuth: boolean = false
let tokenKeyName: string = 'accessToken'

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

function getAuthorization (): object {
  const token = getToken()
  return {
    headers: { Authorization: `Bearer ${token}` }
  }
}

function checkIsAuth (): boolean {
  const token = getToken()

  if (token) { setIsAuthTrue() }

  return getIsAuth()
}

/**
 ******************************
 * @private_methods
 ******************************
 */
function getIsAuth (): boolean {
  return isAuth
}

function setIsAuthTrue () {
  isAuth = true
}

function getToken () {
  const storedItem = window.localStorage.getItem(tokenKeyName) 

  return `Bearer ${storedItem}`
}

function storeToken (accessToken:string) {
  window.localStorage.setItem(tokenKeyName, accessToken)
}

function clearToken () {
  window.localStorage.removeItem(tokenKeyName)
}

function _resetAuthData () {
  $store.commit('user/SET_CURRENT_USER', {})

  // reset tokens
  clearToken()
}

function _setAuthData (accessToken:string) {
  storeToken(accessToken)
  setIsAuthTrue()
}

export default {
  makeLogin,
  makeLogout,
  getAuthorization,
  checkIsAuth
}