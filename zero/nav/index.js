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
        name: '美化网站导航'
      }, {
        name: '实现圣杯布局'
      }, {
        name: '仿PC版百度首页'
      }, {
        name: '常用样式的汇总页面'
      }, {
        name: '用CSS画图标'
      }, {
        name: '动画方面的任务'
      }, {
        name: '仿蝉意花园'
      }, {
        name: '仿手机版的今日头条'
      }]
    }, {
      type: 'JavaScript',
      content: [{
        name: '数字操作练习'
      }, {
        name: '字符串操作练习'
      }, {
        name: '数组操作练习'
      }, {
        name: '日期操作练习'
      }, {
        name: '网站导航加快捷打开的功能'
      }]
    }, {
      type: 'jQuery',
      content: [{
        name: '数字操作练习'
      }, {
        name: '字符串操作练习'
      }, {
        name: '数组操作练习'
      }, {
        name: '日期操作练习'
      }, {
        name: '网站导航加快捷打开的功能'
      }]
    }, {
      type: 'Bootstrap',
      content: [{
        name: '后台管理系统的 Dashboard页'
      }]
    }, {
      type: 'Vue',
      content: [{
        name: '简单的计算器'
      }, {
        name: '代办事宜'
      }, {
        name: '列表页'
      }]
    }, {
      type: '综合任务',
      content: [{
        name: 'TODO'
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
        name: '布局',
      },{
        name: '常用规则',
      },{
        name: '继承与层叠',
      }]
    },{
      type: 'JavaScript',
      content: [{
        name: '介绍',
      },{
        name: '语法',
      },{
        name: '内置对象及其常用方法',
      },{
        name: 'DOM',
      },{
        name: 'BOM',
      }]
    },{
      type: '代码质量',
      content: [{
        name: '命名',
      },{
        name: '基本原则',
      },{
        name: '代码风格',
      }]
    },{
      type: 'jQuery',
      content: [{
        name: '介绍',
      },{
        name: '选择元素',
      },{
        name: '获取和设置元素信息',
      },{
        name: '事件',
      },{
        name: '与服务器交互',
      },{
        name: '动画',
      }]
    },{
      type: 'Bootstrap',
      content: [{
        name: 'Bootstrap',
      }]
    },{
      type: '软件工程',
      content: [{
        name: '软件工程',
      }]
    },{
      type: 'Vue',
      content: [{
        name: '介绍',
      },{
        name: '模板语法',
      },{
        name: '组件',
      }]
    },]
  }, {
    id: 'about-course',
    name: '教程说明',
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
      var initType = location.hash !== '' ? location.hash.substr(1) : 'task'
      this.switchTab(initType)
      this.isShowNav = !this.isMobile
    }
  })
})()
