<template lang="pug">
.c-field-group.u-text--left.u-text--italic
  label.c-field__label(v-if="label" :for="uuid") {{label}}

  select.c-field__select.c-field__input--error(
    v-bind="{
      ...$attrs,
      onChange: updateValue
    }"
    :value="modelValue"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  )
    option.c-field__option(
      v-for="option in options"
      :value="option.id"
      :key="option.id"
      :selected="option === modelValue"
    ) {{ option.value }}

  .c-field__error(v-if="error" :id="`${uuid}-error`") {{ error }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//import store from '@/store/index'
import '@/core/components/__scss__/form/concept.select.scss'

import UniqueID from '@/core/utils/returnUniqueID'
import SetupFormComponent from '@/core/components/form/SetupFormComponent'

export default defineComponent({
  name: 'BaseSelect',
  props: {
    options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number]
    }
  },
  setup (props, context) {
    const { updateValue } = SetupFormComponent(props, context)
    const uuid = UniqueID().getID()
    return {
      updateValue,
      uuid
    }
  }
})
</script>