import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '../router'

Vue.use(Vuex)

// 共享的状态，我们不能直接更改状态，但是可以像 store.state.user 这样访问一个状态
const state = {
  // 用户信息，初始值从本地 localStorage 获取
  user: ls.getItem('user'),
  // 添加 auth 来保存当前用户的登录状态
  auth: ls.getItem('auth')
}

// 更改状态的方法，我们可以在这里更改状态，调用方法是像 store.commit('UPDATE_USER', user) 这样提交一个事件类型，这里不能包含异步操作
const mutations = {
  UPDATE_USER(state, user) {
    // 改变 user 的值  
    state.user = user
    // 将改变后的值存入 localStorage
    ls.setItem('user', user)
  },
  // 添加 UPDATE_AUTH 来更改当前用户的登录状态
  UPDATE_AUTH(state, auth) {
    state.auth = auth
    ls.setItem('auth', auth)
  }
}

// 类似于 mutations，但我们不在这里直接更改状态，而是提交前面的 mutation，调用方法是像 store.dispatch('login') 这样分发一个事件，这里可以包含异步操作
const actions = {
  login({ commit }, user) {
    // 登录时有传用户信息，就更新下用户信息  
    if (user) commit('UPDATE_USER', user)
    // 更新当前用户的登录状态为已登录
    commit('UPDATE_AUTH', true)
    // 跳转到首页
    router.push('/')
  },
  logout({ commit }) {
    commit('UPDATE_AUTH', false)
    router.push({ name: 'Home', params: { logout: true } })
  },
  // 更新个人信息
  updateUser({ state, commit }, user) {
    // 获取仓库的个人信息
    const stateUser = state.user

    // 简单的数据类型判断
    if (stateUser && typeof stateUser === 'object') {
      // 合并新旧个人信息，等价于 user = Object.assign({}, stateUser, user)
      user = { ...stateUser, ...user }
    }

    // 更新个人信息
    commit('UPDATE_USER', user)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store