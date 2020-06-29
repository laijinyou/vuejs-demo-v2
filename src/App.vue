<template>
  <div class="container">
    <div class="jumbotron">
      <div class="container">
        <h1>Welcome from Bootstrap</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><a class="btn btn-primary btn-lg" href="http://www.bootcss.com/" role="button" target="_blank">Learn more <span class="glyphicon glyphicon-hand-right" aria-hidden="true"></span></a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
@import "~bootstrap-sass/assets/stylesheets/_bootstrap";

body > .container { margin-top: 15px;}
</style>
<!-- 通过为 <template> 和 <style> 指定 lang 属性，我们就可以使用其他语法来书写代码。-->
<!-- 以 .vue 结尾的文件构成了一个单文件组件，它可以由 <template>、<script> 和 <style> 三个部分组成，分别对应模板、脚本和样式。-->
<!-- 上面的 <style> 部分使用了 scss 语法，它是 Sass（一种 CSS 扩展语言）语法的一种，Sass 允许我们在 CSS 中书写支持变量等编程特性的语法。$icon-font-path 是 bootstrap-sass 的一个变量，用于指定字体路径，它默认使用了一个相对路径的地址，在使用 @import 引入样式前，我们需要手动将其指向 "~bootstrap-sass/assets/fonts/bootstrap/"，不指定会报找不到字体模块的错误 -->
<!-- "~bootstrap-sass/assets/fonts/bootstrap/" 中的波浪号（~）会将后面的内容当模块路径对待，默认指向 node_modules 目录。-->