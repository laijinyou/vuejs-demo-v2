<template>
  <div class="navbar navbar-default topnav">
    <div class="container">
      <div class="navbar-header">
        <a href="/" class="navbar-brand">
          <span class="title">{{ logo.title }}</span>
          <img :src="logo.src" :alt="logo.title">
        </a>
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
      }
    }
  },
  // 生命周期钩子的一部分，在实例初始化之后，数据观测之前被调用，所以我们能从数据对象 data 中访问 this.uploadsUrl
  beforeCreate() {
    // 在当前实例上添加一个 uploadsUrl 属性
    this.uploadsUrl = 'https://cdn.trip123.com'
  }
}
</script>

<!-- scoped：添加此属性，则样式只在当前组件起作用。-->
<style scoped>
.title { display: none;}
</style>
<!-- src 和 alt 都是 HTML 特性，不能使用 Mustache 语法，而要使用 v-bind 指令，:src 是 v-bind:src 的缩写。-->