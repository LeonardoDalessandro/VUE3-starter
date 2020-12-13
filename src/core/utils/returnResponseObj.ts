import {ResponseInterface} from '@/core/models/responseModels'
import getStatusProps from './returnStatusProps'

function _getResponseObj (code: number, message: string, data: any): ResponseInterface {
  const newObject: ResponseInterface = {
    statusCode: 0,
    statusMessage: '',
    data: null
  }

  newObject.statusCode = code
  
  if (message) {
    newObject.statusMessage = message
  } else {
    newObject.statusMessage = getStatusProps._getStatusMessage(code)
  }  

  if (data) {
    newObject.data = data
  }

  return newObject
}

export default {
  _getResponseObj
}