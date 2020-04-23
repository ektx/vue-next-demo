<template>
  <div class="test">
    
    <h1>{{ arr }}</h1>

    <HelloModule />
  </div>
</template>

<script>
import { getCurrentInstance } from "vue"
import HelloModule from "@/modules/HelloModule"



export default {
  components: {
    HelloModule
  },
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
