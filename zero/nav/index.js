!(function() {
  var navs = [{
    id: 'prepare',
    name: '学前准备',
  }, {
    id: 'task',
    name: '任务',
    detail: [{
      type: 'HTML',
      content: [{
        name: '常用标签总结',
        url: 'http://www.jianshu.com/p/bf175e31fb5f',
      }, {
        name: '网站导航',
        url: 'http://www.jianshu.com/p/aefb985f0de7'
      }, {
        name: '较复杂页面的练习',
        url: 'http://www.jianshu.com/p/6d9a1bb4106d'
      }]
    }, {
      type: 'CSS',
      content: [{
        name: '美化网站导航',
        url: 'http://www.jianshu.com/p/bbb41e85ec0e'
      }, {
        name: '实现圣杯布局',
        url: 'http://www.jianshu.com/p/582dcc0c6464'
      }, {
        name: '仿PC版百度首页',
        url:'http://www.jianshu.com/p/1672f6cd9f74'
      }, {
        name: '常用样式的汇总页面',
        url:'http://www.jianshu.com/p/51434febaf41'
      }, {
        name: '用CSS画图标',
        url:'http://www.jianshu.com/p/6380774681cc'
      }, {
        name: '仿蝉意花园',
        url:'http://www.jianshu.com/p/cbf882221814'
      }, {
        name: '仿手机版的今日头条',
        url:'http://www.jianshu.com/p/1b446eb13abd'
      }]
    }, {
      type: 'JavaScript',
      content: [{
        name: '数字操作练习',
        url: 'http://www.jianshu.com/p/2780b51a4091'
      }, {
        name: '字符串操作练习',
        url: 'http://www.jianshu.com/p/4263991d02d7'
      }, {
        name: '数组操作练习',
        url: 'http://www.jianshu.com/p/0418dd793b9d'
      }, {
        name: '日期操作练习',
        url: 'http://www.jianshu.com/p/e0998a791c71'
      }, {
        name: '动态生成网站导航',
        url: 'http://www.jianshu.com/p/2377ece9a9a2'
      }]
    }, {
      type: 'jQuery',
      content: [{
        name: '页面概要',
        url:'http://www.jianshu.com/p/9497b504bfbe'
      }, {
        name: '简单的计算器',
        url:'http://www.jianshu.com/p/ad400f0fb515'
      }, {
        name: '代办事宜',
        url:'http://www.jianshu.com/p/10161620505a'
      }, {
        name: '列表页',
        url:'http://www.jianshu.com/p/006ed2970a26'
      }]
    }, {
      type: 'Bootstrap',
      content: [{
        name: 'Bootstrap 练习题',
        url: 'http://www.jianshu.com/p/10ba2b7b932b'
      }]
    }, {
      type: 'Vue',
      content: [{
        name: '简单的计算器',
        url: 'http://www.jianshu.com/p/875bbcfbd2ea'
      }, {
        name: '代办事宜',
        url: 'http://www.jianshu.com/p/651fc8794b8e'
      }]
    }, {
      type: '综合任务',
      content: [{
        name: 'Web版 干货集中营',
        url: 'http://www.jianshu.com/p/e8567632454e'
      }]
    }, ]
  }, {
    id: 'about-task',
    name: '任务说明',
  }, {
    id: 'course',
    name: '教程',
    detail: [{
      type: '前端介绍',
      content: [{
        name: '前端介绍',
        url: 'http://www.jianshu.com/p/6335956a1bad'
      },
      ]
    },
    {
      type: '基础技能',
      content: [
      {
        name: '学习方法',
        url: 'http://www.jianshu.com/p/9121a012b34b',
      },
      {
        name: '如何克服拖延？',
        url: 'http://www.jianshu.com/p/0ce54058bbdf'
      },
      {
        name: '如何提问？',
        url: 'http://www.jianshu.com/p/8472c8539426'
      },]
    },
    {
      type: 'HTML',
      content: [{
        name: 'HTML 介绍',
        url: 'http://www.jianshu.com/p/e1517a713556'
      },{
        name: '常见标签和属性',
        url: 'http://www.jianshu.com/p/e1517a713556'
      }]
    },{
      type: 'CSS',
      content: [{
        name: '介绍',
        url: 'http://www.jianshu.com/p/3268a6e64d00'
      },{
        name: '语法',
        url: 'http://www.jianshu.com/p/7d2c5f36702b'

      },{
        name: '选择器',
        url: 'http://www.jianshu.com/p/d70779b43d4a'
      },{
        name: '布局介绍',
        url: 'http://www.jianshu.com/p/12a69ebb6e41'
      },{
        name: '布局的基础知识',
        url: 'http://www.jianshu.com/p/de085cc0c67f'
      },{
        name: 'Flex 布局介绍',
        url: 'http://www.jianshu.com/p/b2b48c39450b'
      },{
        name: 'inline-block 布局介绍',
        url: 'http://www.jianshu.com/p/707d9aab1d87'
      },{
        name: '定位(Position)布局',
        url: 'http://www.jianshu.com/p/eede7a64e509'
      },{
        name: '让元素居中的写法汇总',
        url: 'http://www.jianshu.com/p/878a9d5dd405'
      },{
        name: '响应式布局',
        url: 'http://www.jianshu.com/p/3962ea2549d0'
      },{
        name: '响应式布局之媒体查询(media-queries)',
        url: 'http://www.jianshu.com/p/1e6e0c2f4e55'
      },{
        name: '响应式布局之rem',
        url: 'http://www.jianshu.com/p/1af305583b58'
      },{
        name: '常用属性概览',
        url: 'http://www.jianshu.com/p/b2889973263f'
      },{
        name: '文本与字体',
        url: 'http://www.jianshu.com/p/8e2db84c466f'
      },{
        name: '背景',
        url: 'http://www.jianshu.com/p/3379ad747a25'
      },{
        name: '边框',
        url: 'http://www.jianshu.com/p/d4f48a84f2f5'
      },{
        name: '颜色',
        url: 'http://www.jianshu.com/p/4c5117783a7a'
      },{
        name: '继承与层叠',
        url: 'http://www.jianshu.com/p/dc6f65654728'
      }]
    },{
      type: 'JavaScript',
      content: [{
        name: '介绍',
        url: 'http://www.jianshu.com/p/f3d96aa068fd'
      },{
        name: '语法',
        url: 'http://www.jianshu.com/p/162f37ffbb1a'
      },{
        name: '数据类型介绍',
        url: 'http://www.jianshu.com/p/92fc2c512de4'
      },{
        name: '数值',
        url: 'http://www.jianshu.com/p/38171f010b2d'
      },{
        name: '布尔值',
        url: 'http://www.jianshu.com/p/72a7fddab5c8'
      },{
        name: '字符串',
        url: 'http://www.jianshu.com/p/4070c32f5b2a'
      },{
        name: '对象',
        url: 'http://www.jianshu.com/p/fa98af801352'
      },{
        name: '数组',
        url: 'http://www.jianshu.com/p/5c0db5c18575'
      },{
        name: '日期',
        url: 'http://www.jianshu.com/p/a3f00054cc58'
      },{
        name: 'DOM',
        url: 'http://www.jianshu.com/p/c328019a4bf4'
      },{
        name: 'BOM',
        url: 'http://www.jianshu.com/p/2c66d623e4d8'
      }]
    },{
      type: '代码质量',
      content: [{
        name: '命名',
        url: 'http://www.jianshu.com/p/7ce49ca72ef0'
      },{
        name: '基本原则',
        url: 'http://www.jianshu.com/p/27070dc2787e'
      },{
        name: '代码风格',
        url: 'http://www.jianshu.com/p/d623ef624696'
      }]
    },{
      type: 'jQuery',
      content: [{
        name: '介绍',
        url: 'http://www.jianshu.com/p/da93cdb62db8'
      },{
        name: '选择元素',
        url: 'http://www.jianshu.com/p/5c2bbbd0efc6'
      },{
        name: '获取和设置元素信息',
        url: 'http://www.jianshu.com/p/085a1018cd00',
      },{
        name: '事件',
        url: 'http://www.jianshu.com/p/cc5565de98fd'
      },{
        name: '与服务器交互',
        url: 'http://www.jianshu.com/p/c15a2fcf7294'
      },{
        name: '动画',
        url: 'http://www.jianshu.com/p/890b37a80aa5'
      }]
    },{
      type: 'Bootstrap',
      content: [{
        name: 'Bootstrap',
        url: 'http://www.jianshu.com/p/97921d3597ed'
      }]
    },{
      type: '软件工程',
      content: [{
        name: '软件工程介绍',
        url: 'http://www.jianshu.com/p/ceba85b64c8f'
      }]
    },{
      type: 'Vue',
      content: [{
        name: '介绍',
        url: 'http://www.jianshu.com/p/cfdccd2cd057'
      },{
        name: '模板语法',
        url: 'http://www.jianshu.com/p/f3c6a32d5cf6'
      },{
        name: '组件',
        url: 'http://www.jianshu.com/p/4723049d5586'
      }]
    },]
  }, {
    id: 'about-course',
    name: '教程说明',
  }, {
    id: 'demos',
    name: '代码示例',
    detail: [{
      type: 'HTML',
      content: [{
        name: '页面的基本结构',
        url: 'https://zhifeclub.github.io/front-end-learn/resource/demos/html/struct'
      },{
        name: '常见标签',
        url: 'https://zhifeclub.github.io/front-end-learn/resource/demos/html/complex'
      }]
    }, {
      type: 'CSS',
      content: [{
        name: '常用样式',
        url: 'https://zhifeclub.github.io/front-end-learn/resource/demos/css/normal-style'
      },{
        name: 'rem 用法',
        url: 'https://zhifeclub.github.io/front-end-learn/resource/demos/css/rem/'
      }]
    }, {
      type: 'JavaScipt',
      content: [{
        name: '循环',
        url: 'https://zhifeclub.github.io/front-end-learn/resource/demos/loop/'
      },{
        name: '函数',
        url: 'https://zhifeclub.github.io/front-end-learn/resource/demos/function/'
      }]
    }]

  }, {
    id: 'doc',
    name: '文档导航',
    detail: [{
      name: 'Markdown 参考',
      url: 'http://warpedvisions.org/projects/markdown-cheat-sheet'
    },{
      name: 'HTML5标签',
      url: 'http://websitesetup.org/html5-cheat-sheet/'
    },{
      name: 'CSS 参考手册',
      url: 'http://css.doyoe.com/'
    },{
      name: 'Flex 布局教程：语法篇',
      url: 'http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html'
    },{
      name: 'Javascript API',
      url: 'http://overapi.com/javascript'
    },{
      name: 'jQuery API',
      url: 'http://oscarotero.com/jquery/'
    },{
      name: 'Vue API',
      url: 'https://cn.vuejs.org/v2/api/'
    },]
  }, {
    id: 'software',
    name: '软件使用',
    detail: [{
      name: 'Chrome 开发者工具',
      url: 'http://www.css88.com/doc/chrome-devtools/'
    },{
      name: '如何优雅地使用Sublime Text',
      url: 'http://www.jeffjade.com/2015/12/15/2015-04-17-toss-sublime-text/'
    },{
      name: 'Git 参考手册',
      url: 'http://gitref.justjavac.com/'
    }]
  },{
    id: 'question',
    name: '问题汇总',
    detail: [{
      name: 'HTML 问题汇总',
      url: 'http://www.jianshu.com/p/9339ab251592'
    },{
      name: 'CSS 问题汇总',
      url: 'http://www.jianshu.com/p/0d20f66057fc'
    },{
      name: 'JavaScript 问题汇总',
      url: 'http://www.jianshu.com/p/47ebef4df9c0'
    },{
      name: 'BootStrap 问题汇总',
      url: 'http://www.jianshu.com/p/fe316ff6278a'
    },{
      name: 'jQuery 问题汇总',
      url: 'http://www.jianshu.com/p/878b7c8e2773'
    },{
      name: 'Vue.js 问题汇总',
      url: 'http://www.jianshu.com/p/26de74d7444c'
    },{
      name: '微信开发问题汇总',
      url: 'http://www.jianshu.com/p/cb2f33dff8d7'
    },{
      name: '其他 问题汇总',
      url: 'http://www.jianshu.com/p/9b91609a35f3'
    }]
  }, {
    id: 'contract',
    name: '联系我们'
  }]
  var app = new Vue({
    el: '#app',
    data: {
      navs: navs,
      current: null,
      isShowNav: true,
      isMobile: document.body.clientWidth < 768
    },
    watch: {
      isShowNav: function() {
        var el = document.querySelector('.sidebar')

        if(this.isShowNav) {
          el.classList.add('show')
          this.$nextTick(function () {
            el.style.overflow = 'hidden'
            el.style.visibility = 'hidden'
            el.classList.remove('collapse')
            el.style.display = 'block'
            var height = el.scrollHeight + 'px'
            el.style.height = 0

            setTimeout(function(){
              el.style.visibility = 'visible'
              el.classList.add('collapsing')
              el.style.height = height
            }, 0)
          })
        } else {
          el.classList.remove('show','collapsing')
        }
      }
    },
    methods: {
      switchTab: function(type) {
        this.current = type
        location.hash = type
        if(this.isMobile) {
          this.isShowNav = false
        }
      },
      toggleNav: function() {
        this.isShowNav = !this.isShowNav
      },
    },
    mounted: function() {
      var initType = location.hash !== '' ? location.hash.substr(1) : 'course'
      this.switchTab(initType)
      this.isShowNav = !this.isMobile
    }
  })
})()
