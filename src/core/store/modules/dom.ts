import {
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';

@Module({
  namespaced: true,
  name: 'dom'
})

export default class DomModule extends VuexModule {
  windowWidth = 0;
  bpLg = 1200;
  bpMdLg = 1024;
  bpMdSm = 768;
  bpSm = 480;

  get isBpLg() {
    return this.windowWidth >= this.bpLg;
  }

  get isBpMdLg() {
    return this.windowWidth <= this.bpMdLg;
  }

  get isBpMdSm() {
    return this.windowWidth <= this.bpMdSm;
  }

  get isBpSm() {
    return this.windowWidth <= this.bpSm;
  }

  @Mutation
  SET_ITEM (data: number) {
    this.windowWidth = data
  }  
}