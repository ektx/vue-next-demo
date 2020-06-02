<template>
  <div class="child-a">
    <h1>A - {{ msg }}</h1>
    <input type="text" v-model="data.value">
    <p>data: {{ data }}</p>
  </div>
</template>

<script>
import { data } from './test'

export default {
  name: 'CompositionChildA',
  setup() {
    let msg = 'Child'

    return {
      msg,
      data
    }
  }
}
</script>

<style>

</style>