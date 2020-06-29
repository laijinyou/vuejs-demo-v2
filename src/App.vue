<template lang="pug">
  div#app
    img(src="./assets/logo.png")
    h1 Welcome from pug & sass
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 200px;

  h1 {
    color: #42b983;
  }
}
</style>
<!-- 通过为 <template> 和 <style> 指定 lang 属性，我们就可以使用其他语法来书写代码。-->
<!-- 以 .vue 结尾的文件构成了一个单文件组件，它可以由 <template>、<script> 和 <style> 三个部分组成，分别对应模板、脚本和样式。-->