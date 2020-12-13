<template lang="pug">
.c-field-group.u-row--middle-center.u-text--left.u-text--italic
  input
    type="radio"
    v-bind="{ ...$attrs, onChange: updateValue }"
    :checked="modelValue === value"
    :id="uuid"
  )/
  label(v-if="label" :for="uuid") {{ label }}

  //- <BaseErrorMessage
  //-   v-if="error"
  //-   :id="`${uuid}-error`"
  //- >
  //-   {{ error }}
  //- </BaseErrorMessage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

//import store from '@/store/index'
import '@/core/components/__scss__/form/concept.select.scss'

import UniqueID from '@/core/utils/returnUniqueID'
import SetupFormComponent from '@/core/components/form/SetupFormComponent'

export default defineComponent({
  name: 'BaseRadio',
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number]
    },
    value: {
      type: [String, Number]
    },
    error: {
      type: String,
      default: ''
    }
  },
  setup (props, context) {
    const uuid = UniqueID().getID()
    const { updateValue } = SetupFormComponent(props, context)
    return {
      updateValue,
      uuid
    }
  }
})
</script>