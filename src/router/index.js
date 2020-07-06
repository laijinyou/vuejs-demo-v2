import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes' // 引入 routes.js

Vue.use(Router)

const router =  new Router({
  mode: 'history', // 利用 History API 来完成页面跳转且无须重新加载
  linkExactActiveClass: 'active',
  // 指定滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // 有锚点时，滚动到锚点
      return { selector: to.hash }
    } else if (savedPosition) {
      // 有保存位置时，滚动到保存位置
      return savedPosition
    } else {
      // 默认滚动到页面顶部
      return { x: 0, y: 0 }
    }
  },
  routes // 具体的路由配置列表
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 获取仓库里的登录信息，使用 router.app 可以获取 router 对应的 Vue 根实例，使用实例的 $options.store 可以从选项中访问仓库
  const app = router.app
  const store = app.$options.store
  const auth = store.state.auth
  // 获取目标页面路由参数里的 articleId
  const articleId = to.params.articleId
  // 当前用户
  const user = store.state.user && store.state.user.name
  // 路由参数中的用户
  const paramUser = to.params.user

  app.$message.hide()

  if (
    (auth && to.path.indexOf('/auth/') !== -1) ||
    (!auth && to.meta.auth) ||
    // 有 articleId 且不能找到与其对应的文章时，跳转到首页
    (articleId && !store.getters.getArticleById(articleId)) ||
    // 路由参数中的用户不为当前用户，且找不到与其对应的文章时，跳转到首页
    (paramUser && paramUser !== user && !store.getters.getArticlesByUid(null, paramUser).length)
  ) {
    // 如果当前用户已登录，且目标路由包含 /auth/ ，就跳转到首页
    next('/')
  } else {
    next()
  }
})

// 注册全局后置钩子
router.afterEach((to, from) => {
  const app = router.app
  const store = app.$options.store
  // 获取目标页面路由参数里的 showMsg
  const showMsg = to.params.showMsg

  if (showMsg) {
    // showMsg 是一个字符时，使用它作为消息内容
    if (typeof showMsg === 'string') {
      // 显示消息提示
      app.$message.show(showMsg)
    } else {
      // 显示操作成功
      app.$message.show('操作成功')
    }
  }
})


export default router