import { ref, computed, watch } from 'vue'

const initValue = 3
const initArray: [string, string, string] = ['Tim', 'Bob', 'Joe']

function useEventSpace (): object {
  const capacity = ref(initValue)
  const attending = ref(initArray)

  const spacesLeft = computed(() => {
    return capacity.value - attending.value.length
  })

  function increaseCapacity () {
    capacity.value++
  }

  watch(capacity, () => {
    alert('capacity is change: ' + capacity.value)
  })

  return { capacity, increaseCapacity, attending, spacesLeft }
}

export default {
  useEventSpace
}