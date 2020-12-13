<template lang="pug">
  div
    component(
      v-for="opts in options"
      :key="opts.value"
      :is="vertical ? 'div' : 'span'"
      :style="vertical ? '' : 'margin-right: 20px;'"
    )
      BaseRadio(
        :name="name"
        :label="opts.label"
        :modelValue="modelValue"
        :value="opts.value"
        @update:modelValue="$emit('update:modelValue', $event)"
      )/

</template>

<script lang="ts">
import { defineComponent } from 'vue';

//import store from '@/store/index'
import '@/core/components/__scss__/form/concept.select.scss'

export default defineComponent({
  name: 'BaseRadioGroup',
  props: {
    vertical: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  }
})
</script>