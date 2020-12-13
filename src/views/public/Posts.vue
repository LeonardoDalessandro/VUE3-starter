<template lang="pug">
#posts
  | {{posts}}


</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import BaseService from '@/core/services/baseService'

export default defineComponent({
  name: 'Posts',
  data () {
    return {
      posts: null,
    }
  },

  created() {
    const endpoint = 'posts'
    BaseService.getListPublic(endpoint ,{})
      .then((result) => {
        this.posts = result.data
      })
  }
});
</script>
