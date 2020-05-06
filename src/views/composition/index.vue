<template>
  <div class="test">
    
    <Todo />

    <HelloModule />
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup(props, context) {
    console.log('props:', props)
    // 当前上下文
    const { ctx } = getCurrentInstance()
    console.log('ctx this:', ctx)
    console.log('context:', context)

    // 获取路由方法一
    console.log('route 1:', ctx.$router.currentRoute.value)
    // 获取路由方法二
    const route = useRoute()
    console.log('route 2:', route.path, route)

    return { }
  }
}
</script>

<style lang="less" scoped>
.test {
  color: #333;
}
</style>
