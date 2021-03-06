# 用 jQuery 做代办事宜列表
## 前提条件  
* [选择元素](http://www.jianshu.com/p/5c2bbbd0efc6)
* [获取和设置元素信息](http://www.jianshu.com/p/085a1018cd00)
* [事件](http://www.jianshu.com/p/cc5565de98fd)

## 概要
类型：实践
难度：中等  

## 任务描述
做 http://todomvc.com/examples/jquery/ 所示的待办事宜。外观可以不一定和所示 Demo 一致，但要满足下面的功能：
1. 支持新增。在文本框输入内容，按回车新增。
1. 支持标记为完成（条目前面的radiobtn）和删除（hover到条目会出现删除按钮）。
1. 支持对条目的筛选：所有，未完成的，已完成的。

## 提示
* 用数组来存待办事宜。可以是类似这样的结构：`[{id:'xx', title: '标题',isComplete: false}, ...]`。
* 对待办事宜的新增，修改，删除，就是对数组的相关内容的操作。
* 写个绘制的函数将数组画到页面上。每次数组发生变化后，就执行那绘制函数。
* 因为代办事宜是动态生成的，所以在代办事宜上的事件都需要用事件委托。

将数组画到页面上推荐用模板引擎 [Handlebars](http://handlebarsjs.com/)。

