<template>
  <div class="child-b">
    <h1>B - {{ msg }}</h1>
    <p>data: {{ data }}</p>

    <BB/>
  </div>
</template>

<script>
import { data } from '../test'
import BB from './chilBB'

export default {
  name: 'CompositionChildB',
  components: { BB },
  setup() {
    let msg = 'Child'

    return {
      msg,
      data,
    }
  }
}
</script>

<style>

</style>