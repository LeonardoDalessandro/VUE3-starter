import {
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';
import { FeedbackInterface } from '@/core/models/feedbackModels';

@Module({
  namespaced: true,
  name: 'feedback'
})

export default class FeedbackModule extends VuexModule {
  item: FeedbackInterface = {
    status: 0, // 0 => success, 1 => warning, 2 => danger
    body: 'Body'
  }

  @Mutation
  SET_ITEM (data: FeedbackInterface) {
    this.item = data
  }
}