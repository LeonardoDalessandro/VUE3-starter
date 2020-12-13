<template lang="pug">
button.c-btn.u-row--middle-center
  slot/
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//import store from '@/store/index'
import '@/core/components/__scss__/form/concept.button.scss'

export default defineComponent({
  name: 'BaseButton',

  //TODO: watcher store value

  //TODO: show temp message

  /*get feedback () {
    //const storedFeedback = store.state.feddback.item
    const storedFeedback = {
      status: 2,
      body: 'For a guide and recipes on how to configure / customize this project, check out the vue-cli documentation.'
    }
    return storedFeedback
  }*/
});
</script>