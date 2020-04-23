<template>
  <div class="about">
    <h1>Options API</h1>

    <h1>Arr: {{ arr }} </h1>
    <input type="text" v-model="textV">
    <button @click="appendEvt">Append</button>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data () {
    return {
      arr: [1,2,3],
      textV: 0
    }
  },
  methods: {
    appendEvt () {
      this.arr[this.arr.length] = this.textV
    },
  }
}
</script>