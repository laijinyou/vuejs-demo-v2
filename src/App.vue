<template>
  <div id="wrap">

    <!-- 页头 -->
    <TheHeader/>

    <div id="main-container" class="container main-container">
      <!-- 功能组件，它会渲染路径匹配到的视图组件 -->
      <router-view/>
    </div>

    <!-- 页脚 -->
    <TheFooter/>
    
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader' // 引入 TheHeader.vue
import TheFooter from '@/components/layouts/TheFooter' // 引入 TheFooter.vue

export default {
  name: 'App',
  // 注册组件
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
$container-large-desktop: 1200px;
$btn-primary-bg: #00b5ad;
$btn-primary-border: #00b5ad;
$label-primary-bg: #00b5ad;
$pagination-active-bg: #00b5ad;
$pagination-active-border: #00b5ad;
$pagination-color: #00b5ad;
$input-border-focus: #00b5ad;
$link-color: #12c4c5;
$link-hover-color: #22ddde;
$icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/"; // 指定字体路径
$fa-font-path: "~font-awesome/fonts/"; // 指定字体路径

@import "~bootstrap-sass/assets/stylesheets/_bootstrap"; // bootstrap样式
@import "~font-awesome/scss/font-awesome"; // 字体样式
@import "./styles/main"; // 网站样式
@import "./styles/extra"; // 网站样式
@import '~simplemde/dist/simplemde.min.css';
@import '~highlight.js/styles/paraiso-dark.css';
@import "~animate.css/animate.min.css";
</style>
<!-- 通过为 <template> 和 <style> 指定 lang 属性，我们就可以使用其他语法来书写代码。-->
<!-- 以 .vue 结尾的文件构成了一个单文件组件，它可以由 <template>、<script> 和 <style> 三个部分组成，分别对应模板、脚本和样式。-->
<!-- 上面的 <style> 部分使用了 scss 语法，它是 Sass（一种 CSS 扩展语言）语法的一种，Sass 允许我们在 CSS 中书写支持变量等编程特性的语法。$icon-font-path 是 bootstrap-sass 的一个变量，用于指定字体路径，它默认使用了一个相对路径的地址，在使用 @import 引入样式前，我们需要手动将其指向 "~bootstrap-sass/assets/fonts/bootstrap/"，不指定会报找不到字体模块的错误 -->
<!-- "~bootstrap-sass/assets/fonts/bootstrap/" 中的波浪号（~）会将后面的内容当模块路径对待，默认指向 node_modules 目录。-->
<!-- $fa-font-path 是 font-awesome 的一个变量，用于指定字体路径，我们需要手动将其指向 "~font-awesome/fonts/"。-->