import {FeedbackInterface} from '@/core/models/feedbackModels'
import getStatusProps from '@/core/utils/returnStatusProps'
import $store from '@/store/index'

function _getFeedbackObj (code: number, message: string) {
  const feedbackObj: FeedbackInterface = {
    status: getStatusProps._getStatus(code),
    body: message
  }

  $store.commit('feedback/SET_ITEM', feedbackObj)
}

export default {
  _getFeedbackObj
}