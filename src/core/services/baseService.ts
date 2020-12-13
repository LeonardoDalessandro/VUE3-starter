import api from '@/core/services/api'
import AuthService from '@/core/services/authService'

import responseObj from '@/core/utils/returnResponseObj'

let entity: string

function setEntity (nameEntity: string) {
  entity = nameEntity
} 

function getEntity (): string {
  return entity
} 


/**
 * ------------------------------
 * @API_CALLS_PUBLIC
 * ------------------------------
 */

async function getListPublic (endpoint: string, parameters = {}) {

  const params = { ...parameters }

  setEntity(endpoint)

  //const response = await api.baseAPI.get(`${entity}`, { params })

  //console.log(response)

  //return response

  try {
    const response = await api.baseAPI.get(`${entity}`, { params })

    const message = `${entity} public list: loaded`

    const newObj = responseObj._getResponseObj(response.status, message, response.data)

    return newObj
  } catch (error) {
    const message = error.response.data ? error.response.data.error : error.response.statusText

    const newObj = responseObj._getResponseObj(error.response.status, message, {})
    
    return newObj
  }
}

async function getByIdPublic (endpoint: string, id:number) {

  setEntity(endpoint)

  try {
    const response = await api.baseAPI.get(`${entity}/${id}`)
    const message = `${entity} public item: loaded`

    return responseObj._getResponseObj(response.status, message, response.data)
  } catch (error) {
    const message = error.response.data ? error.response.data.error : error.response.statusText
    
    throw responseObj._getResponseObj(error.response.status, message, {})
  }
}

/**
 * ------------------------------
 * @API_CALLS_PRIVATE
 * ------------------------------
 */
const isAuth:boolean = AuthService.getIsAuth()

async function getById (endpoint: string, id:number) {

  setEntity(endpoint)

  if (isAuth) {
    try {
      const response = await api.baseAPI.get(`${entity}/${id}`)
      const message = `${entity} private item: loaded`

      return responseObj._getResponseObj(response.status, message, response.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText

      return responseObj._getResponseObj(error.response.status, message, {})
    }
  }
}

async function create (endpoint: string, data:Object = {}) {

  setEntity(endpoint)

  if (isAuth) {
    try {
      const response = await api.baseAPI.post(`${entity}`, data)
      const message = `New ${entity} created`

      return responseObj._getResponseObj(response.status, message, {})
    } catch (error) {
      const message = `New ${entity} try to create, but fail`

      return responseObj._getResponseObj(error.response.status, message, {})
    }
  }
}

async function update (endpoint: string, id:number, data:Object = {}) {

  setEntity(endpoint)

  if (isAuth) {
    try {
      const response = await api.baseAPI.put(`${entity}/${id}`, data)
      const message = `Selected ${entity} updated`

      return responseObj._getResponseObj(response.status, message, {})
    } catch (error) {
      const message = `Selected ${entity} try to update, but fail`

      return responseObj._getResponseObj(error.response.status, message, {})
    }
  }
}

async function remove (endpoint: string, id:number) {

  setEntity(endpoint)
  
  if (isAuth) {
    try {
      const response = await api.baseAPI.delete(`${entity}/${id}`)
      const message = `Selected ${entity} deleted`

      return responseObj._getResponseObj(response.status, message, {})
    } catch (error) {
      const message = `Selected ${entity} try to delete, but fail`

      return responseObj._getResponseObj(error.response.status, message, {})
    }
  }
}

export default {
  // Entity
  setEntity,
  getEntity,

  // Public endpoint
  getListPublic,
  getByIdPublic,

  // Private endpoint
  getById,
  create,
  update,
  remove
}