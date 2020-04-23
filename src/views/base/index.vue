<template>
  <div class="test">
    <h1>count: {{count}}</h1>
    <p>{{count}} * 2 = {{ doubleCount }}</p>
    <button @click="lessEvt">-</button>
    <button @click="addEvt">+</button>
    <h1>{{ arr }}</h1>
  </div>
</template>

<script>
import { ref, watch, computed, getCurrentInstance } from "vue"

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
  setup(props, context) {
    console.log('props:', props)
    // 当前上下文
    const { ctx } = getCurrentInstance()
    console.log('ctx this:', ctx)
    console.log('context:', context)
    // 获取路由
    console.log('route:', ctx.$router.currentRoute.value)

    

    const arr = []

    return {
      ...countDemo(),
      arr
    }
  }
}
</script>

<style lang="less" scoped>
.test {
  color: #333;
}
</style>
