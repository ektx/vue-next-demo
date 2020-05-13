<template>
  <div class="home">
    <img alt="Vue logo" src="~@/assets/logo.png">
    <HelloWorld ref="test" msg="Welcome to Your Vue.js App" @time="time"/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup() {
    let time = val => {
      console.log(val)
    }
    return {
      time
    }
  }
}
</script>
