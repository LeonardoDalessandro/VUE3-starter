import msg from '@/core/config/_feedbackMassage'

function _getStatusMessage (status: number): string {
  let message: string = ''
  switch (status) {
    case 200:
      message = msg.msg200
      break
    case 201:
      message = msg.msg201
      break
    case 400:
      message = msg.msg400
      break
    case 401:
      message = msg.msg401
      break
    case 404:
      message = msg.msg404
      break
    case 503:
      message = msg.msg503
      break
    default:
      message = msg.msgDefault
      break
  }
  return message
}

function _getStatus (status: number): number {
  let statusId: number
  switch (status) {
    case 200:
      statusId = 0
      break
    case 201:
      statusId = 0
      break
    case 400:
      statusId = 2
      break
    case 401:
      statusId = 2
      break
    case 404:
      statusId = 2
      break
    case 503:
      statusId = 2
      break
    default:
      statusId = 1
      break
  }
  return statusId
}

export default {
  _getStatusMessage,
  _getStatus
}