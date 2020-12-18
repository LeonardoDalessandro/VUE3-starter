import _ from 'lodash'
import chars from '@/core/config/_invalidChars'
import {SanityzedObjInterface} from '@/core/models/securityModels'

function stringifyInput (val: any):string {
  const stringVal = `${val}`
  return stringVal
}

function checkChars (checkString: string) {
  let toCheck: string
  let counter = 0

  const result: SanityzedObjInterface = {
    message: null,
    valid: true
  }

  if (_.isString(checkString)) {
    toCheck = checkString
  } else {
    toCheck = stringifyInput(checkString)
  }

  chars.invalidChars.forEach( (item) => {
    if (checkString.indexOf(item) >= 0) {
      counter++
    }
  })

  if (counter > 0) {
    result.message = chars.textMessage
    result.valid = false
  }

  return result
}

export default {
  checkChars
}