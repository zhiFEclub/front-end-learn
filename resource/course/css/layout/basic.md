# 布局的基础知识
建议学习时长： 30分钟  
学习方式：深入  

## 学习目标
* 了解行内元素和块级元素的区别。
* 知道 margin 和 padding 的区别。
* 了解盒模型。
* 了解 content-box 和 border-box 的区别。

## 详细介绍
### 行内元素和块级元素
元素分为两种，行内元素和块级元素。一般用块级元素来做布局，行内元素做修饰。

块级元素会新开始一行，并且宽度会和父元素的宽度一样。常见的块级元素有：div，p，h1，header。

多个行内元素会显示在一行。一个行内元素可以在段落中 `<span> 像这样 </span> `包裹一些文字而不会打乱段落的布局。常见的行内元素有：span，a，strong。

用 CSS 可以将块级元素和行内元素进行相互的转化。如，将块级元素转换为行内元素，只需设置
`display:inline` ，将行内元素转化为块级元素，只需设置 `display:block`。

### margin 和 padding
元素之间的间距分为外边距和内边距。

非父子关系的元素与元素之间的间距称为外边距，用 margin 来设置。如：
```
margin: 3px 4px 5px 6px;
```
设置上面样式的元素距周边元素的上，右，下，左的距离分别是 3px 4px 5px 6px。

父元素与子元素的间距称为内间距，用 padding 来设置。

### 盒模型
页面上显示的每个元素（包括内联元素）都可以看作一个盒子，即盒模型( box model )。请看Chrome 开发者工具里的截图：    

![](http://upload-images.jianshu.io/upload_images/7219342-2d6201c2e39052d6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

盒模型由 4 部分组成。从内到外分别是
```
content -> padding -> border -> margin
```

border 指边框。

## 盒模型占的空间计算规则
不同的盒模型占的空间计算规则是不一样的。

盒模型的默认类型是 content-box。占的宽度为 水平方向的 border，padding 值 加 width，占的高度为 垂直方向的 border，padding 值 加 height。

盒模型的另一个类型是 border-box。占的宽度为 width，占的高度为 height。将盒模型设置为 border-box，比较容易布局。

## 设置核模型
用 box-sizing 来设置盒模型。 如
```
box-sizing: border-box;
```

## 推荐阅读
* [ 学习CSS布局](http://zh.learnlayout.com/clear.html) 了解即可，该文章里讲的有些内容比较旧，下面我们也会专门介绍布局技术。
