# HTML 介绍
建议学习时长： 30分钟  
学习方式：了解  

## 学习目标
* 知道什么是 HTML。
* 了解HTML的基本结构。
* 知道什么是标签。
* 知道什么是属性。
* 知道 HTML 文件的后缀是什么。
* 知道如何在浏览器中运行 HTML 文件。

## 详细介绍
### HTML 简史
HTML 是 蒂姆·伯纳斯-李（物理学家），在80年代后期设计了一种能在网上分享文档的方式。在这之前，网上沟通的方式仅限于纯文本传递，比如：电子邮件、FTP(文件传输协议)和Usenet讨论版。HTML是利用内容档案储存至中央服务器的方式，然后再将内容透过浏览器传递至本机工作站。它简化了内容存取的方式，也让更多丰富内容能够显示（诸如较复杂的文本格式与图片的显示）。

### 什么是HTML
HTML是超文本标记语言（HyperText Markup Language）的简写。它是用来描述网页内容的一种语言。内容就是网页制作者放在页面上想要让用户浏览的信息，可以包含文字、图片、视频等。

HTML 是由一系列的标签(也叫元素)组成的。

### 什么是标签
HTML 为由一对尖括号（<>）所括起来的内容赋予了特定含义。 这样的标识称为一个 标签（tag）。如，下面是一个表示段落的标签：
```
<p>这是一段文字</p>
```

上面的例子中, `p` 是标签的名字， `<p>` 是标签的开始， `</p>` 是标签的结束，`这是一段文字` 是标签的内容。

标签里可以嵌套标签，如  
```
<p>这是一段<strong>很重要</strong>的文字</p>
```

标签的名字不是乱写的。是由 W3C 维护的，所有的标签见 [这里](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element)。

有些标签不能包含内容，称为空元素。如，文本输入框就是空标签
```
<input type="text" />
```

### 什么是属性
属性是标签的特性。属性包括属性名和属性值，写法是 `name="value"`，属性只能写在开始标签中。如
```
<p class="intro" id="a">介绍</p>

```

上面代码中， `class`，`id`是属性名，`intro` 和 `a` 是对应的属性值。


## HTML 页面的基本结构
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>标题</title>
</head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>
```

其中
* DOCTYPE定义了文档类型。`<!DOCTYPE html>`表明这是一个HTML5文档。了解即可。
* `<html>`和`</html>`之间的内容描述了网页。所有的网页标签必须写在`<html></html>` 中。
* `<head>`和`</head>`之间的内容描述了网页的一些额外信息。不会被显示。
* `<title>`之间的内容描述了网页的标题。会在网页标签上显示
* `<meta charset="utf-8">`让浏览器用utf-8的编码格式来对文档内容进行编码
* `<body>`和`</body>`之间的内容描述网页的可见部分

## 如何在浏览器中运行 HTML 文件
创建一个文件，后缀名是 `html`。 在编辑器中打开文件，内容复制 HTML 页面的基本结构。双击文件，即可在浏览器运行。

## 更多学习资源
* [MDN 的 HTML 入门](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Introduction)

## 拓展阅读
* [什么是超文本？](http://w3school.com.cn/tags/tag_term_hypertext.asp)


## 练习题
1. 写一个 HTML 页面，页面的标题是 Hello World。并在浏览器中运行。
1. 完成[慕课 HTML+CSS基础课程](http://www.imooc.com/learn/9) 中第一章。