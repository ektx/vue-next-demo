<template>
  <div class="todo-mod">
    <h1>{{ title }}</h1>
    <input type="text" v-model="state.value" />
    <button @click="appendEvt">Add</button>
    <ul>
      <li 
        v-for="(item, i) in state.arr"
        :key="i"
      >{{ i +1 }}. {{ item }}</li>
    </ul>
  </div>
</template>

<script>
import { todoList } from '@/mixins/todo'

export default {
  props: {
    title: {
      type: String,
      default: 'Todo List'
    }
  },
  setup () {
    const { state, appendEvt } = todoList()

    return {
      state,
      appendEvt
    }
  }
}
</script>

<style>

</style>