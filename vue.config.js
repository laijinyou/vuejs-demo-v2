// vue.config.js 是一个可选的配置文件，它会被自动加载。
// 我们添加 publicPath 选项，当 process.env.NODE_ENV 指向生产环境时，
// 我们将部署应用时的基本 URL 指向'/vuejs-demo-v2/dist/'，
// 这样我们在使用 GitHub Pages 时，才能正确地引用静态资源。
// 如果你不需要 GitHub Pages 了，可以将其去掉。
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vuejs-demo-v2/dist/'
      : '/'
  }