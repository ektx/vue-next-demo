<template>
  <div class="test">
    
    <h1>Todo List</h1>
    <input type="text" v-model="state.value" />
    <button @click="appendEvt">Add</button>
    <ul>
      <li 
        v-for="(item, i) in state.arr"
        :key="i"
      >{{ i +1 }}. {{ item }}</li>
    </ul>

    <HelloModule />
  </div>
</template>

<script>
import { getCurrentInstance, reactive } from 'vue'
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

    const state = reactive({
      value: '',
      arr: []
    })

    const appendEvt = () => {
      state.arr.push(state.value)
      state.value = ''
    }

    return {
      state,
      appendEvt,
    }
  }
}
</script>

<style lang="less" scoped>
.test {
  color: #333;
}
</style>
