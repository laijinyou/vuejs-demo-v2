<template>
  <div class="navbar-right">

    <!-- 已登录，显示用户信息 -->
    <ul v-if="auth" class="nav navbar-nav github-login">

      <!-- 创作文章 -->
      <li>
        <a v-dropdown href="javascript:;">
          <i class="fa fa-plus text-md"></i>
        </a>
        <ul class="dropdown-menu">
          <li>
            <router-link to="/articles/create">
              <i class="fa fa-paint-brush text-md"></i>
              创作文章
            </router-link>
          </li>
        </ul>
      </li>
      
      <!-- 头像 -->
      <li>
        <a v-dropdown href="javascript:;">
          <span v-if="user">
            <img v-if="user.avatar" :src="user.avatar" class="avatar-topnav">
            <span v-if="user.name">{{ user.name }}</span>
          </span>
          <span v-else>佚名</span>
          <span class="caret"></span>
        </a>
        
        <!-- 下拉菜单栏 -->
        <ul class="dropdown-menu">
          <!-- 个人专栏 -->
          <li v-if="user">
            <router-link :to="`/${user.name}`">
              <i class="fa fa-list-ul text-md i-middle"></i>
              个人专栏
            </router-link>
          </li>
          <!-- 编辑资料 -->
          <li>
            <router-link to="/users/1/edit">
              <i class="fa fa-cog text-md i-middle"></i>编辑资料
            </router-link>
          </li>
          <!-- 退出功能 -->
          <li><a href="javascript:;" @click="logout"><i class="fa fa-sign-out text-md"></i>退出</a></li>
        </ul>

      </li>
    </ul>

    <!-- 未登录，显示登录注册 -->
    <div v-else class="nav navbar-nav github-login">
      <router-link to="/auth/login" class="btn btn-default login-btn">
        <i class="fa fa-user"></i> 登 录
      </router-link>
      <router-link to="/auth/register" class="btn btn-default login-btn">
        <i class="fa fa-user-plus"></i> 注 册
      </router-link>
    </div>
    
  </div>
</template>

<script>
import { mapState } from 'vuex' // 引入 mapState 辅助函数

export default {
  name: 'TheEntry',
  // 添加计算属性选项，用来处理相对复杂的逻辑，并返回一个新的属性，它会根据其依赖的变化而变化。
  computed: {
    // 使用对象展开运算符，将 mapState 对象混入到计算属性之中
    ...mapState([
      // 映射 this.auth 为 store.state.auth
      'auth',
      // 映射 this.user 为 store.state.user
      'user'
    ])
  },
  // 添加 methods 选项，并添加 logout 方法
  methods: {
    logout() {
      this.$swal({
        text: '你确定要退出吗?',
        confirmButtonText: '退出'
      }).then((res) => {
        if (res.value) {
          this.$store.dispatch('logout')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>