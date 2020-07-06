<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer-top">

        <!-- 左侧 -->
        <div class="col-sm-5 col-lg-5">
          <p class="padding-top-xsm">{{ description }}</p>

          <div class="text-md">
            <a v-for="item in contacts" :key="item" v-title="item.title" :href="item.link" :style="contactStyle" target="_blank">
              <i :class="`fa fa-${item.icon}`"></i>
            </a>
          </div>

          <br>
          <span v-html="designer"></span>
        </div>

        <!-- 右侧 -->
        <div class="col-sm-6 col-lg-6 col-lg-offset-1">
          <div class="row">

            <!-- 赞助商 -->
            <div class="col-sm-4">
              <h4>{{ sponsor.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="item in sponsor.list" :key="item">
                  <a :href="item.link" target="_blank">
                    <img v-title="item.title" :src="item.logo" :alt="item.title" class="footer-sponsor-link" width="98">
                  </a>
                </li>
              </ul>
            </div>

            <!-- 统计信息 -->
            <div class="col-sm-4">
              <h4>{{ statistics.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="item in statistics.list" :key="item">{{ item.title }}: {{ item.description }}</li>
              </ul>
            </div>

            <!-- 统计信息 -->
            <div class="col-sm-4">
              <h4>{{ other.title }}</h4>

              <ul class="list-unstyled">
                <li v-for="item in other.list" :key="item">
                  <a :href="item.link" :title="item.title" target="_blank">
                    <i :class="`fa fa-${item.icon}`"></i> {{ item.title }}
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  </footer>
</template>

<script>
import title from '@/directives/title' // 引入 title.js

export default {
  name: 'TheFooter',
  // 添加 directives 选项，注册自定义指令
  directives: {
    title // 注册 title.js
  },
  data() {
    return {
      description: 'Vue.js Demo 是一个 Vue.js 的学习课程',
      contacts: [
        {
          icon: 'envelope',
          title: '发送邮件',
          link: 'mailto:1183820@qq.com'
        },
        {
          icon: 'weibo',
          title: '站长微博',
          link: 'https://trip123.com/'
        },
        {
          icon: 'weixin',
          title: '加我微信',
          link: 'https://trip123.com/'
        }
      ],
      // 样式对象 contactStyle，绑定到 style
      contactStyle: {
        paddingRight: '8px'
      },
      // HTML 字符串 designer，为了输出 HTML，我们需要使用 v-html 指令,
      // 上面的 <span> 里的内容（这里没有内容）将会被替换成 designer 的内容，直接作为 HTML 输出。
      designer: `
        <span style="font-size:0.9em">Designed by
          <span style="color: #e27575;font-size: 14px;">❤</span>
          <a href="https://github.com/laijinyou/vuejs-demo-v2"target="_blank"style="color:inherit">Sloth</a>
        </span>
      `,
      sponsor: {
        title: '赞助商',
        list: [
          {
            logo: 'https://cdn.trip123.com/demo/bQawWl3vT5dc2lYx5JZ7.png',
            title: '本站服务器由 UCloud 赞助',
            link: 'https://trip123.com/'
          },
          {
            logo: 'https://cdn.trip123.com/demo/yGLIR0idW7zsInjsNmzr.png',
            title: '本站 CDN 服务由七牛赞助',
            link: 'https://trip123.com/'
          },
          {
            logo: 'https://cdn.trip123.com/demo/XPtLlZmIN1cQbLuDFEON.png',
            title: 'Composer 镜像赞助商',
            link: 'https://trip123.com/'
          },
          {
            logo: 'https://cdn.trip123.com/demo/JpTCK6OKYBIrBIWdtob8.png',
            title: '订阅邮件赞助商：SendCloud',
            link: 'https://trip123.com/'
          }
        ]
      },
      statistics: {
        title: '统计信息',
        list: [
          {
            title: '社区会员',
            description: '22889'
          },
          {
            title: '话题数',
            description: '7397'
          },
          {
            title: '评论数',
            description: '39375'
          }
        ]
      },
      other: {
        title: '其他信息',
        list: [
          {
            icon: 'thumbs-up',
            title: '软件外包服务',
            link: 'https://trip123.com/'
          },
          {
            icon: 'globe',
            title: '推荐网站',
            link: 'https://trip123.com/'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
a:hover, a:focus { color: #e27575; transition: color .15s;}
</style>