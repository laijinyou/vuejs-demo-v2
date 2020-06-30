<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <a href="/" class="navbar-brand">
          <span class="title">{{ logo.title }}</span>
          <img :src="logo.src" :alt="logo.title">
        </a>
      </div>

      <!-- v-for 使用 item in items 形式的特殊语法，items 是源数组的别名，对应我们这里的 navList，item 是数组元素的别名，你可以使用其他适合的名称。-->
      <div id="top-navbar-collapse" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <!-- v-for 支持一个可选的第二个参数为当前项的索引，该索引从 0 开始，对应我们这里的 index-->
          <!-- 我们使用对象语法对 class 进行了绑定，上面的语法表示当 index === activeNavIndex 返回 true 时添加 'active' 这个类名-->
          <li v-for="(item, index) in navList" :key="item" :class="{ active: index === activeNavIndex }">
            <!-- 我们在 <a> 上使用 @click 绑定一个点击事件处理器 changeNavIndex，对应 methods 选项下的 changeNavIndex 方法， @click 是 v-on:click 指令的缩写-->
            <a href="#" @click="changeNavIndex(index)">{{ item }}</a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  // 数据对象，在组件里必须是返回一个初始数据对象的函数，我们可以在这里添加所需的数据
  data() {
    return {
      logo: {
        // src 的值是用反引号（`）标识的模板字符串，我们只需将变量放在 ${} 的大括号之中
        src: `${this.uploadsUrl}/demo/vuejs-demo-v2-logo.jpg`,
        title: 'Vue.js Demo'
      },
      navList: ['社区', '头条', '问答', '教程'],
      activeNavIndex: 0
    }
  },
  // 生命周期钩子的一部分，在实例初始化之后，数据观测之前被调用，所以我们能从数据对象 data 中访问 this.uploadsUrl
  beforeCreate() {
    // 在当前实例上添加一个 uploadsUrl 属性
    this.uploadsUrl = 'https://cdn.trip123.com'
  },
  // methods 选项用来存放当前实例的方法，这些方法可以通过当前实例进行访问，如 this.changeNavIndex(1)，在指令表达式中，我们直接使用 changeNavIndex(1) 进行访问。
  methods: {
    changeNavIndex(index) {
      this.activeNavIndex = index
    }
  }
}
</script>

<!-- scoped：添加此属性，则样式只在当前组件起作用。-->
<style scoped>
.title { display: none;}
.navbar-default .navbar-nav > .active > a { background: rgba(0,0,0,.03);}
</style>
<!-- src 和 alt 都是 HTML 特性，不能使用 Mustache 语法，而要使用 v-bind 指令，:src 是 v-bind:src 的缩写。-->