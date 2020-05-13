<template>
  <h1>{{ msg }}</h1>
</template>

<script>
export default {
  name: 'CompositionChild',
  setup() {
    let msg = 'Child'

    return {
      msg
    }
  }
}
</script>

<style>

</style>