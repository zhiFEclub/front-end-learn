# Vue.js 介绍
建议学习时长： 30分钟  
学习方式：了解  

## 学习目标
* 知道什么是 Vue.js
* 了解 Vue.js 的特点
* 能运行 `Hello World`。

## 详细介绍
> Vue.js（读音 /vjuː/，类似于 view） 是一套构建用户界面的渐进式框架。与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。

Vue.js 和 jQuery 不同的是：如果要修改页面的内容，用 jQuery 的方式是直接选择DOM，修改内容；用 Vue.js 的方式是修改数据，Vue.js 会根据我们会写好的数据与页面内容的关联关系，Vue.js 自动的更新页面。

有[中文官网](https://cn.vuejs.org)和中文文档(妈妈再也不担心我英文不好)~

### 特点
* 易学，易用。API 简洁明了。
* 灵活。简单小巧的核心，渐进式技术栈，足以应付任何规模的应用。
* 高效。20kb min+gzip 运行大小；超快虚拟 DOM；最省心的优化。

### 入门
1 引入 Vue.js 的脚本
```
<script src="https://unpkg.com/vue"></script>
```

2 HTML 中加如下内容
```
<div id="app">
  {{ message }}
</div>
<script>
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
</script>
```

页面输出结果：`Hello Vue!`

