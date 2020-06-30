// 引入 vue.js 的默认值
import Vue from 'vue'
// 引入 App.vue 的默认值
import App from './App'
// 如果引入的是 index.js，可以使用下面的简写，等价于 import router from './router/index.js'
import router from './router'
import './directives'
import './components'
// 引入 store/index.js 的默认值
import store from './store'
// 引入插件
import VueSweetalert2 from './plugins/vue-sweetalert2'

// 使用插件
Vue.use(VueSweetalert2)
// 设置 false 以阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false

// new Vue 创建一个新的 Vue 实例，然后在参数选项中添加 render 选项 ，
// 该函数用来生成虚拟节点，最后使用 $mount 方法将其挂在到 #app。
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
