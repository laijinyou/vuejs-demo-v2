export default [
  // 注册
  {
    path: '/auth/register', // 路由的路径
    name: 'Register', // 路由的名称
    component: () => import('@/views/auth/Register') // 对应的视图组件，实现路由懒加载
  },
  // 首页
  {
    path: '/',
    name: 'Home',
    alias: '/topics',
    component: () => import('@/views/Home')
  },
  // 首页
  {
    path: '*',
    redirect: '/'
  },
  // 登录
  {
    path: '/auth/login',
    name: 'Login',
    component: () => import('@/views/auth/Login')
  },
  // 因为只支持单用户，所以我们指定 path 中用户的 ID 为 1。
  {
    path: '/users/1/edit',
    component: () => import('@/views/users/Edit.vue'),
    children: [
      // 更新个人资料
      {
        path: '',
        name: 'EditProfile',
        component: () => import('@/views/users/Profile.vue'),
        // auth 为 true，标识当前路由需要登录才能访问
        meta: { auth: true }
      },
      // 更新头像
      {
        path: '/users/1/edit_avatar',
        name: 'EditAvatar',
        component: () => import('@/views/users/Avatar.vue'),
        meta: { auth: true }
      },
      // 更新密码
      {
        path: '/users/1/edit_password',
        name: 'EditPassword',
        component: () => import('@/views/users/Password.vue'),
        meta: { auth: true }
      }
    ]
  },
  // 创建文章
  {
    path: '/articles/create',
    name: 'Create',
    component: () => import('@/views/articles/Create'),
    meta: { auth: true }
  },
  // 编辑文章
  {
    path: '/articles/:articleId/edit',
    name: 'Edit',
    component: () => import('@/views/articles/Create'),
    meta: { auth: true }
  },
  // 搜索文章
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search')
  },
  // Column
  {
    path: '/:user',
    component: () => import('@/views/articles/Column'),
    children: [
      {
        path: '',
        name: 'Column',
        component: () => import('@/views/articles/List.vue')
      },
      {
        path: '/articles/:articleId/content',
        name: 'Content',
        component: () => import('@/views/articles/Content.vue')
      }
    ]
  },
]