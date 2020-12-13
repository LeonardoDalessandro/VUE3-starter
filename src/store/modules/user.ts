import {
  Module,
  Mutation,
  Action,
  VuexModule,
} from 'vuex-module-decorators';
import { UserInterface } from '@/core/models/userModels';

// import { UsersService } from '@/core/services/userService'


@Module({
  namespaced: true,
  name: 'user'
})

export default class UserModule extends VuexModule {
  currentUser: UserInterface = {
    id: 0,
    role: 0,
    name: '',
    email: ''
  }

  @Mutation
  SET_ITEM (data: UserInterface) {
    this.currentUser = data
  }

  @Action
  getCurrent () {
    /*
    return UsersService.getCurrent()
      .then(user => this.context.commit('SET_ITEM', user.data))
      .catch(error => this.context.commit('feedback/SET_ITEM', { status: 2, body: error.message }, { root: true }))
    */

    return null
    
  }
}