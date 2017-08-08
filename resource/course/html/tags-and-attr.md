# 常见标签和属性
建议学习时长：90分钟  
学习方式：深入  

## 学习目标
* 知道 超链接，标题，段落，图片，列表，标签，表格，表单相关（文本输入框，单选框，多选框，下拉框）的标签怎么写。
* 知道注释怎么写。

## 详细介绍
### 链接
链接由 `<a>`定义。    
常用属性
* `href` 链接地址，常见的链接地址有如下几种
  * `https://gusouk.com/`
  * `/a.html`
  * `#aaa` 页面滚动至name或id为`aaa`的地方
  * `javascript:void(0);`
  * `mailto:nowhere@mozilla.org` 邮件链接
  * `tel:+491570156` 电话链接
* `title` 提示内容
* `target` 链接的文档在何处显示
  * 默认在当前页显示
  * `_blank` 在新窗口显示
  * 值若为iframe的name值一致，则在iframe中打开

前端在做页面写链接地址时，若不知道地址，可将href设置成`###`。若点击a不跳转页面，而是绑定点击事件,则href设置为`javascript:void(0);`。

### 标题
1号到6号标题分别由 `<h1>`到`<h6>`定义。    

### 段落
段落是由 `<p>` 标签定义。

### 图片
图像由 `<img>` 标签定义。常用属性
* `src` 图片地址
* `alt` 加载图片失败时，显示的文字

### 列表
有序列表由`<ol>`定义，列表的条目由`<li>`定义。如
```
<h3>最热单曲</h3>
<ol>
  <li>时间都去哪儿了</li>
  <li>泡沫</li>
  <li>卷珠帘</li>
</ol>
```

无序列表由`<ul>`定义，列表的条目由`<li>`定义。如
```
<h3>a的常见属性包括</h3>
<ul>
  <li>href</li>
  <li>title</li>
  <li>name</li>
  <li>target</li>
</ul>
```

### 标签
标签由`<label>`定义。常见属性
* `for`

### 表格
表格由`<table>`元素定义。一个普通的表格，如下：
```
<table>
  <thead>
    <tr>
      <th>姓名</th>
      <th>性别</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>路飞</td>
      <td>男</td>
    </tr>
    <tr>
      <td>索隆</td>
      <td>男</td>
    </tr>
    <tr>
      <td>香吉士</td>
      <td>男</td>
    </tr>
    <tr>
      <!-- 跨两列 -->
      <td colspan="2"></td>
    </tr>
    <tr>
      <!-- 跨两行 -->
      <td rowspan="2"></td>
    </tr>
  </tbody>
</table>
```

### 表单
表单由`<form>`来定义。它用于把用户输入的数据提交到后台。常见属性    
* `action` 提交地址。
* `method` 提交方式。默认为GET

点击提交按钮时，表单进行提交。    
提交的内容为表单元素的name属性的值与用户输入的对应元素的值。    

一个普通的表单
```
<form action="" method="POST">
  <div>
    <label for="">名称</label>
    <input name="name" type="text" placeholder="请输入名称">
  </div>
  <div>
    <label for="">介绍</label>
    <textarea name="des"></textarea>
  </div>
  <button type="reset">重置</button>
  <button type="submit">提交</button>
</form>
```

常见的表单输入元素有：    
* 文本框 `<input type="text">` 常见属性
  * `placeholder`
  * `value`
  * `maxlength` 最大长度
* 文本域 `<textarea></textarea>` 和文本框相比，可输入更多文字。常见属性
  * `placeholder`
  * `value`
  * `maxlength` 最大长度IE9(不包括)以下不支持
* 单选框 `<input type="radio" name="gendar">` 。其中`name`的值一样的单选框只有一个能被选中
* 复选框 `<input type="checkbox" name="gendar">`
* 下拉选择框 `<select><option value="1">苹果</option><option value="2">橘子</option></select>`
* 数字框 `<input type="number">` 。注意，其不支持`maxlength`属性
  * `min` 最小值
  * `max` 最大值
* 提交按钮 `<button type="submit">提交</button>` 点击
* 重置按钮 `<button type="reset">重置</button>`

注意：为了能让后台辨别不同的表单元素，表单元素输入必须加`name`属性。

### div
`<div>`组合文档中的块级元素

### span
`<span>`组合文档中的行内元素

### 注释
注释由
```
<!-- 注释内容 -->
```
来定义。


![](http://upload-images.jianshu.io/upload_images/7219342-1427582bebd0213c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 更多学习资源
* [MDN 的 HTML 元素参考](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)
* [HTML标签大全](http://www.jianshu.com/p/0676fe569396)

## 练习题
1 写下 [百度首页](https://www.baidu.com/) 的 HTML。
2  用户调查的页面的HTML。调查的内容包括：
  * 姓名
  * 性别 (单选按钮)
  * 所在国家 (下拉框)
  * 年龄　
  * 爱好 可多选 (复选框)
  * 自我介绍

3 用 table 元素做一个课程表。