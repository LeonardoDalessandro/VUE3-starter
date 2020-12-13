<template lang="pug">
.c-notification(v-if="feedback" aria-live="assertive")
  .c-notification__card(
    :class="[ feedback.status == 0 ? 'c-notification--success' : '', feedback.status == 1 ? 'c-notification--warning' : '', feedback.status == 2 ? 'c-notification--error' : '']"
  )
    p.c-notification__text
      | <span class="u-text--bold" v-if="feedback.status == 0">Well done! </span>
      | <span class="u-text--bold" v-if="feedback.status == 1">Warning! </span>
      | <span class="u-text--bold" v-if="feedback.status == 2">Error! </span>
      | {{ feedback.body }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//import store from '@/store/index'
import '@/core/components/__scss__/popup/concept.feedback.scss'

export default defineComponent({
  name: 'AppFeedback',

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
