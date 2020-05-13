<template>
  <div class="about">
    <h1>count: {{count}}</h1>
    <p>{{count}} * 2 = {{ doubleCount }}</p>
    <button @click="lessEvt">-</button>
    <button @click="addEvt">+</button>
    
    <HelloModule ref="mod"/>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data () {
    return {
      // 定义一个值
      count: 0
    }
  },
  watch: {
    count (val) {
      console.log('From Watch conut:', val)
    }
  },
  computed: {
    // doubleCount 从计算属性中添加
    doubleCount () {
      return this.count * 2
    }
  },
  mounted() {
    console.log(this.$refs.mod)
  },
  methods: {
    // 添加方法
    addEvt () {
      this.count++
    },
    // 减少方法
    lessEvt () {
      this.count--
    }
  }
}
</script>