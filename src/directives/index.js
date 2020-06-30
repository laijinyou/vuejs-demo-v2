import Vue from 'vue'
import validator from './validator'
import dropdown from './dropdown'

const directives = {
  validator,
  dropdown
}

// 我们这里使用一个循环，来注册我们的所有指令，Object.entries 返回给定对象的键值对数组，以 Object.entries(directives) 的返回为例
for (const [key, value] of Object.entries(directives)) {
  Vue.directive(key, value)
}