<template lang="pug">
.c-field-group.u-row--middle-center.u-text--left.u-text--italic
  input(
    v-bind="{ ...$attrs, onChange: updateValue }"
    :checked="modelValue"
    :id="uuid"
    type="checkbox"
    class="field"
  )/
  label(:for="uuid" v-if="label") {{ label }}
  </label>
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
import '@/core/components/__scss__/form/concept.button.scss'

import UniqueID from '@/core/utils/returnUniqueID'
import SetupFormComponent from '@/core/components/form/SetupFormComponent'

export default defineComponent({
  name: 'BaseCheckbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: Boolean
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