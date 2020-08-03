<template>
  <div class="navbar navbar-default topnav">
    <div class="container">

      <!-- 左侧导航栏 -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" @click="toggleNav">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>

        <!-- 网站 Logo -->
        <router-link to="/" class="navbar-brand">
          <span class="title">{{ logo.title }}</span>
          <img :src="logo.src" :alt="logo.title">
        </router-link>
      </div>

      <!-- 菜单栏-->
      <div id="top-navbar-collapse" :class="['collapse', 'navbar-collapse', { in: showCollapsedNav }]">
        <ul class="nav navbar-nav">

          <!-- 当 index === activeNavIndex 返回 true 时添加 'active' 这个类名-->
          <li v-for="(item, index) in navList" :key="item" :class="{ active: index === activeNavIndex }">
            <!-- @click 是 v-on:click 指令的缩写-->
            <a href="#" @click="changeNavIndex(index)">{{ item }}</a>
          </li>
        </ul>

         <!-- 右侧导航栏 -->
        <div class="navbar-right">
          <SearchInput/>
          <TheEntry/>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import TheEntry from './TheEntry'
import SearchInput from './SearchInput'

export default {
  name: 'TheHeader',
  components: {
    TheEntry,
    SearchInput
  },
  data() {
    return {
      logo: {
        // src 的值是用反引号（`）标识的模板字符串，我们只需将变量放在 ${} 的大括号之中
        src: `${this.uploadsUrl}/demo/vuejs-demo-v2-logo.jpg`,
        title: 'Vue.js Demo'
      },
      navList: ['社区', '头条', '问答', '教程'],
      activeNavIndex: 0,
      showCollapsedNav: false // 是否显示折叠导航的开关
    }
  },
  beforeCreate() {
    this.uploadsUrl = 'https://cdn.trip123.com'
  },
  methods: {
    changeNavIndex(index) {
      this.activeNavIndex = index
    },
    // 改变 showCollapsedNav
    toggleNav() {
      this.showCollapsedNav = !this.showCollapsedNav
    }
  }
}
</script>

<style scoped>
.title { display: none;}
.navbar-default .navbar-nav > .active > a { background: rgba(0,0,0,.03);}
</style>