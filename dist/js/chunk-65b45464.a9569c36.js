(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65b45464"],{"229d":function(t,e,s){},"735c":function(t,e,s){"use strict";var a=s("229d"),i=s.n(a);i.a},bb51:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Message",{attrs:{show:t.msgShow,type:t.msgType,msg:t.msg},on:{"update:show":function(e){t.msgShow=e}}}),s("div",{staticClass:"col-md-9 topics-index main-col"},[s("div",{staticClass:"panel panel-default"},[s("div",{staticClass:"panel-heading"},[s("ul",{staticClass:"list-inline topic-filter"},t._l(t.filters,(function(e){return s("li",{key:e},[s("router-link",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],class:{active:t.filter===e.filter},attrs:{to:"/topics?filter="+e.filter}},[t._v(t._s(e.name))])],1)})),0),s("div",{staticClass:"clearfix"})]),s("div",{staticClass:"panel-body remove-padding-horizontal"},[s("ul",{staticClass:"list-group row topic-list"},t._l(t.articles,(function(e){return s("li",{key:e.articleId,staticClass:"list-group-item"},[s("router-link",{staticClass:"reply_count_area hidden-xs pull-right",attrs:{to:"/articles/"+e.articleId+"/content",tag:"div"}},[s("div",{staticClass:"count_set"},[s("span",{staticClass:"count_of_votes",attrs:{title:"投票数"}},[t._v(t._s(e.likeUsers?e.likeUsers.length:0))]),s("span",{staticClass:"count_seperator"},[t._v("/")]),s("span",{staticClass:"count_of_replies",attrs:{title:"回复数"}},[t._v(t._s(e.comments?e.comments.length:0))]),s("span",{staticClass:"count_seperator"},[t._v("|")]),s("abbr",{staticClass:"timeago"},[t._v(t._s(t._f("moment")(e.date,"from")))])])]),s("router-link",{staticClass:"avatar pull-left",attrs:{to:"/"+e.uname,tag:"div"}},[s("img",{staticClass:"media-object img-thumbnail avatar avatar-middle",attrs:{src:e.uavatar}})]),s("router-link",{staticClass:"infos",attrs:{to:"/articles/"+e.articleId+"/content",tag:"div"}},[s("div",{staticClass:"media-heading"},[t._v(" "+t._s(e.title)+" ")])])],1)})),0)]),s("div",{staticClass:"panel-footer text-right remove-padding-horizontal pager-footer"},[s("Pagination",{attrs:{currentPage:t.currentPage,total:t.total,pageSize:t.pageSize,onPageChange:t.changePage}})],1)])]),s("TheSidebar")],1)},i=[],l=(s("4de4"),s("fb6a"),s("b0c0"),s("5530")),r=s("2f62"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-3 side-bar"},[s("div",{staticClass:"panel panel-default corner-radius sidebar-resources"},[t._m(0),s("div",{staticClass:"panel-body"},[s("Slider",{attrs:{slides:t.slides},scopedSlots:t._u([{key:"default",fn:function(t){var e=t.currentSlide;return[s("a",{attrs:{href:e.link,target:"_blank"}},[s("img",{attrs:{alt:e.title,title:e.title,src:e.img}})])]}}])})],1)]),s("div",{staticClass:"panel panel-default corner-radius panel-active-users"},[t._m(1),s("div",{staticClass:"panel-body"},[s("div",{staticClass:"users-label"},t._l(t.activeUsers,(function(e,a){return s("router-link",{key:a,staticClass:"users-label-item",attrs:{to:"/"+e.name}},[s("img",{staticClass:"avatar-small inline-block",attrs:{src:e.avatar}}),t._v(" "+t._s(e.name)+" ")])})),1)])]),s("div",{staticClass:"panel panel-default corner-radius panel-hot-topics"},[t._m(2),s("div",{staticClass:"panel-body"},[s("ul",{staticClass:"list"},t._l(t.hotArticles,(function(e,a){return s("li",{key:a},[s("router-link",{attrs:{to:"/articles/"+e.articleId+"/content"}},[s("span",0===a?[t._v("🏆")]:[t._v(t._s(a+1)+".")]),t._v(" "+t._s(e.title)+" ")])],1)})),0)])]),s("div",{staticClass:"other"},[s("div",{staticClass:"panel panel-default corner-radius sidebar-resources"},[t._m(3),s("div",{staticClass:"panel-body"},[s("ul",{staticClass:"list list-group"},t._l(t.resources,(function(e,a){return s("li",{key:a,staticClass:"list-group-item"},[s("a",{attrs:{href:e.link,target:"_blank"}},[s("img",{staticClass:"media-object inline-block ",attrs:{src:"https://cn.vuejs.org/images/logo.png"}}),t._v(" "+t._s(e.title)+" ")])])})),0)])]),t._m(4)])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel-heading text-center"},[s("h3",{staticClass:"panel-title"},[t._v("实战课程")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel-heading text-center"},[s("h3",{staticClass:"panel-title"},[t._v("活跃用户")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel-heading text-center"},[s("h3",{staticClass:"panel-title"},[t._v("七天内最热")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel-heading text-center"},[s("h3",{staticClass:"panel-title"},[t._v("推荐资源")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel panel-default corner-radius"},[s("div",{staticClass:"panel-body text-center"},[s("a",{staticStyle:{color:"#a5a5a5"},attrs:{href:"mailto:1183820@qq.com"}},[s("span",{staticStyle:{"margin-top":"7px",display:"inline-block"}},[s("i",{staticClass:"fa fa-heart",staticStyle:{color:"rgba(232, 146, 136, 0.89)"}}),t._v(" 建议反馈？请私信 Sloth ")])])])])}],o={name:"Sidebar",data:function(){return{slides:[{title:"《Laravel 入门教程 - 从零到部署上线》",img:"https://cdn.trip123.com/demo/YpxKKNlSPdmwotO3u8An.jpg",link:"https://trip123.com/"},{title:"《Laravel 进阶课程 - 从零构建论坛系统》",img:"https://cdn.trip123.com/demo/iNanVVOXdnYQ6jRfMdWE.png",link:"https://trip123.com/"},{title:"《Laravel 教程实战高级 - 构架 API 服务器》",img:"https://cdn.trip123.com/demo/tEd4GxhMp6VMh9e0hrUH.jpg",link:"https://trip123.com/"}],activeUsers:[],hotArticles:[],resources:[{title:"Vue 官方教程",link:"https://cn.vuejs.org/index.html"},{title:"Vuex 官方教程",link:"https://cn.vuejs.org/index.html"},{title:"Vue Router 官方教程",link:"https://cn.vuejs.org/index.html"},{title:"Vue Loader 官方教程",link:"https://cn.vuejs.org/index.html"},{title:"Vue 特有代码的风格指南",link:"https://cn.vuejs.org/index.html"}]}},created:function(){var t=this;this.$axios.get("/users/active").then((function(e){t.activeUsers=e.data})),this.$axios.post("/articles/hot",{num:10}).then((function(e){t.hotArticles=e.data}))}},u=o,d=(s("735c"),s("2877")),p=Object(d["a"])(u,n,c,!1,null,"33022f4b",null),h=p.exports,m={name:"Home",components:{TheSidebar:h},data:function(){return{msg:"",msgType:"",msgShow:!1,articles:[],filter:"default",filters:[{filter:"default",name:"活跃",title:"最后回复排序"},{filter:"excellent",name:"精华",title:"只看加精的话题"},{filter:"vote",name:"投票",title:"点赞数排序"},{filter:"recent",name:"最近",title:"发布时间排序"},{filter:"noreply",name:"零回复",title:"无人问津的话题"}],total:0,pageSize:20}},beforeRouteEnter:function(t,e,s){var a=e.name,i=t.params.logout;s((function(e){if(e.$store.state.auth)switch(a){case"Register":e.showMsg("注册成功");break;case"Login":e.showMsg("登录成功");break}else i&&e.showMsg("操作成功");e.setDataByFilter(t.query.filter)}))},computed:Object(l["a"])(Object(l["a"])({},Object(r["b"])(["auth","user"])),{},{currentPage:function(){return parseInt(this.$route.query.page)||1}}),watch:{auth:function(t){t||this.showMsg("操作成功")},$route:function(t){this.setDataByFilter(t.query.filter)}},methods:{showMsg:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.msg=t,this.msgType=e,this.msgShow=!0},setDataByFilter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",e=this.pageSize,s=this.currentPage,a=this.$store.getters.getArticlesByFilter(t);this.filter=t,this.total=a.length,this.articles=a.slice(e*(s-1),e*s)},changePage:function(t){this.$router.push({query:Object(l["a"])(Object(l["a"])({},this.$route.query),{},{page:t})})}}},v=m,g=Object(d["a"])(v,a,i,!1,null,"36ca4102",null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-65b45464.a9569c36.js.map