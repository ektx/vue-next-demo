<template>
  <div class="test">
    
    <Todo ref="todo" />

    <HelloModule />
  </div>
</template>

<script>
import { ref, getCurrentInstance, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup(props, context) {
    console.log('props:', props)
    let todo = ref(null)
    let num = ref(0)
    // 当前上下文
    const { ctx, refs } = getCurrentInstance()
    console.log('getCurrentInstance:', getCurrentInstance())
    console.log('ctx this:', ctx, refs.todo, todo)
    console.log('context:', context)

    onMounted(() => {
      console.log(1, todo.value.appendEvt, num)
    })

    // 获取路由方法一
    console.log('route 1:', ctx.$router)
    // 获取路由方法二
    const route = useRoute()
    console.log('route 2:', route.path, route)

    return { 
      todo
    }
  }
}
</script>

<style lang="less" scoped>
.test {
  color: #333;
}
</style>
