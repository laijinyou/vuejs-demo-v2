// 引入 vue.js 的默认值
import Vue from 'vue'
// 引入 App.vue 的默认值
import App from './App'

// 设置 false 以阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false

// new Vue 创建一个新的 Vue 实例，然后在参数选项中添加 render 选项 ，
// 该函数用来生成虚拟节点，最后使用 $mount 方法将其挂在到 #app。
new Vue({
  render: h => h(App),
}).$mount('#app')
