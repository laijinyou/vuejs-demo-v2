import Vue from 'vue'
import validator from './validator'
import dropdown from './dropdown'
import title from './title'

const directives = {
  validator,
  dropdown,
  // 添加 title 以便在循环中进行注册
  title
}

// 注册全局指令需要使用 Vue.directive
// 我们这里使用一个循环，来注册我们的所有指令，Object.entries 返回给定对象的键值对数组，以 Object.entries(directives) 的返回为例
for (const [key, value] of Object.entries(directives)) {
  Vue.directive(key, value)
}