import { createStore } from 'vuex'

// CORE BASE STORE
import AuthStoreModule from '@/core/store/modules/auth'
import DomStoreModule from '@/core/store/modules/dom'
import FeedbackStoreModule from '@/core/store/modules/feedback'

// PROJECT STORE
import UserStoreModule from '@/store/modules/user'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {    
    dom: DomStoreModule,
    feedback: FeedbackStoreModule,
    auth: AuthStoreModule,
    user: UserStoreModule
  }
})
