<template>
  <div>
    <h1>count: {{count}}</h1>
    <p>{{count}} * 2 = {{ doubleCount }}</p>
    <button @click="lessEvt">-</button>
    <button @click="addEvt">+</button>
  </div>
</template>

<script>
import { ref, watch, computed } from 'vue'

function countDemo () {
  // 定义一个值
  const count = ref(0)
  // 添加方法
  const addEvt = () => {
    count.value++
  }
  // 减少方法
  const lessEvt = () => {
    count.value--
  }
  // doubleCount 从计算属性中添加
  const doubleCount = computed(() => count.value * 2)
  // watch 方法
  watch(
    // 监听的值
    () => count.value, 
    // 回调函数
    val => {
      console.log('From Watch conut:', val)
    }
  )

  return {
    count,
    addEvt,
    lessEvt,
    doubleCount,
  }
}

export default {
  setup() {
    return {
      ...countDemo()
    }
  }
}
</script>

<style>

</style>