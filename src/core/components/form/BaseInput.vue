<template lang="pug">
.c-field-group.u-text--left.u-text--italic
  label.c-field__label(v-if="label" :for="uuid") {{label}}

  input.c-field__input.c-field__input--error(
    :value="modelValue"
    @input="update" 
    v-bind="{
      ...$attrs,
      onInput: updateValue
    }"
    :id="uuid"
    :placeholder="label"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  )/

  .c-field__error(v-if="error" :id="`${uuid}-error`") {{ error }}

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
import '@/core/components/__scss__/form/concept.input.scss'

import UniqueID from '@/core/utils/returnUniqueID'
import SetupFormComponent from '@/core/components/form/SetupFormComponent'

export default defineComponent({
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
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