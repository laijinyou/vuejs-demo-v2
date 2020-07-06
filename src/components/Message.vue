<template>
  <div v-show="show" :class="`alert alert-${type} alert-dismissible`">
    <button @click="close" type="button" class="close"><span>×</span></button>
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Message',
  // 用来在父组件上传递数据的
  props: {
    // 是否显示消息框
    show: {
      type: Boolean,
      default: false
    },
    // 消息框的类型
    type: {
      type: String,
      default: 'success'
    },
    // 消息
    msg: {
      type: String,
      default: ''
    }
  },
  // 侦听器；watch 选项提供了一个方法来响应数据的变化，
  // 在上面的代码中，我们需要监听 show 的新值 value，完整的传参是 show(val, oldVal)，val 是新值，oldVal 是旧值。
  // 当新值返回 true 时，我们将当前元素滚动到可视区域的顶部。
  watch: {
    show(value) {
      if (value) {
        // 实例的 $nextTick 方法用于在下次 DOM 更新循环结束之后执行延迟回调，它有一个对应的全局方法 Vue.nextTick
        this.$nextTick(() => {
          this.$el.scrollIntoView(true)
        })
      }
    }
  },
  methods: {
    // $emit 用于触发当前实例上的事件，其第一个参数是事件名称，后面还可以附加若干参数。
    // 当点击关闭按钮时，我们触发一个 'update:show' 的事件，并附带一个参数 false，用来关闭消息提示。
    // 为什么事件名称是 'update:show'，我们稍后结合 props 进行讲解。  
    close() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>

</style>