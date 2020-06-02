<template>
  <div class="child-b">
    <h1>Child BB</h1>
    <p>data: {{ data }}</p>
  </div>
</template>

<script>
import { data } from '../test'

export default {
  name: 'CompositionChildBB',
  setup() {
    return {
      data,
    }
  }
}
</script>

<style>

</style>