# jQuery 实现页面概要
## 前提条件  
* [选择元素](http://www.jianshu.com/p/5c2bbbd0efc6)
* [获取和设置元素信息](http://www.jianshu.com/p/085a1018cd00)
* [事件](http://www.jianshu.com/p/cc5565de98fd)

## 概要
类型：实践
难度：中等  

## 任务描述
给定如下的HTML：
```
<div class="todo">
  <h1 class="todo__title">待办事宜</h1>
  <ul>
    <li class="todo__item">看海贼王</li>
    <li class="todo__item todo__item--special">学习前端</li>
    <li class="todo__item">总结</li>
  </ul>
</div>
```

要求：  

1. 使用 3.2.1 版本的 jQuery。可以直接引：`https://unpkg.com/jquery@3.2.1`
1. 用jQuery 来计算，用 console.log 输出如下信息: 在 div.todo 下
  * 有多少的标签。 结果应该是5。
  * 输出每个元素标签名的宽和高。结果形如： 标签名: H1,宽: 974px,高: 45px`。
  * 找出类名中包含 `-` 的元素的内容。 结果应该是 `学习前端`。
  * 输出所有代办事宜的文字内容，用`;`分隔。结果应该是`看海贼王;学习前端;总结`。

