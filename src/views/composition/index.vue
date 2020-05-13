<template>
  <div ref="root" class="test">
    
    <Todo ref="todos" />

    <HelloModule />

    <Child ref="child"/>
  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import Child from './child'

export default {
  components: { Child },
  setup(props, context) {
    console.log('props:', props)
    let todos = ref(null)
    let root = ref(null)
    let child = ref(null)
    let num = ref(0)
    // 当前上下文
    const { ctx } = getCurrentInstance()
    console.log('getCurrentInstance:', getCurrentInstance())
    console.log('ctx this:', ctx)
    console.log('context:', context)
    console.log('child:', child)

    onMounted(() => {
      root.value.style.border = '2px solid'
      console.log(1, todos.value, num, root)
    })

    // 获取路由方法一
    console.log('route 1:', ctx.$router)
    // 获取路由方法二
    const route = useRoute()
    console.log('route 2:', route.path, route)

    return { 
      root
    }
  }
}
</script>

<style lang="less" scoped>
.test {
  color: #333;
}
</style>
