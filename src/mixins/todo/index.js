import { reactive } from 'vue'

export function todoList() {
  const state = reactive({
    value: '',
    arr: []
  })

  const appendEvt = () => {
    state.arr.push(state.value)
    state.value = ''
  }

  return { state, appendEvt }
}