import api from '@/core/services/api'

function stringToHash(string: string) {                  
  let hash:string | number = 0; 

  if (string.length == 0) return hash; 

  for (let i = 0; i < string.length; i++) { 
      let char = string.charCodeAt(i); 
      hash = ((hash << 5) - hash) + char; 
      hash = hash & hash; 
  }

  return hash; 
}

async function getFingerPrint () {
  const response = await api.uaAPI.get('/')
  const UAstring = await JSON.stringify(response)
  const hashResult = await stringToHash(UAstring)

  return hashResult
}

export default {
  getFingerPrint
}