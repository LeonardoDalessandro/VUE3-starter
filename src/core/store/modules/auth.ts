import {
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import { AuthInterface } from '@/core/models/authModels';

@Module({
  namespaced: true,
  name: 'auth'
})

export default class AuthModule extends VuexModule {
  auth: AuthInterface = {
    token: ''
  }

  @Mutation
  SET_ITEM (data: AuthInterface) {
    this.auth = data
  }
}

