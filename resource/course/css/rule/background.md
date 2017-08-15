# CSS之背景
建议学习时长： 10分钟  
学习方式：了解  

## 学习目标
* 知道 CSS 背景的用法。

## 详细介绍
## backgroud-color
指定背景色。

## background-image
指定背景图片。可选值
* inherit 继承
* none (默认)
* url(...)

如
```
background-image: url(someimage.jpg);
```
其中`someimage.jpg`为图片地址

## background-repeat
指定背景图的重复。可选值
* inherit
* repeat (默认) 在水平和垂直方向都重复
* repeat-x 在水平方向重复
* repeat-y 在垂直方向重复
* no-repeat 不重复

## background-position
指定如何定位背景图像。可选值
* top left
* top center
* top right
* center left
* center center
* center right
* bottom left
* bottom center
* bottom right
* x% y%
* xpos ypos

在 CSS3 中，还可以使用 `right 20px bottom 10px` 这样的值，其等价于 `calc(100% - 20px) calc(100% - 10px)`

具体的解释见[这里](http://www.w3school.com.cn/cssref/pr_background-position.asp)

## background-attachment
如何设置固定的背景图像。可选值
* scroll 默认值。背景图像会随着页面其余部分的滚动而移动
* fixed 当页面的其余部分滚动时，背景图像不会移动
* inherit

## background
设置所有背景属性。如
```
background: #00FF00 url(bgimage.gif) no-repeat fixed center top;
```

## background-size
背景图片的大小。

## background-orgin
背景图片的起点，是做为 backgrond-posion 算的依据。

如
```
background-orgin:content-box;
background-postion: right: bottom;
```

默认是 padding-box,可以设置成 content-box（padding没背景） 和 border-box(border-box)。

## background-clip
背景是否延伸到 border 下。

background-orgin 和 background-clip的区别，[CSS3.info](http://www.css3.info/preview/background-origin-and-background-clip/) 上这么说：
The background-origin property is used to determine how the background-position of a background in a certain box is calculated.

The background-clip property is used to determine whether the backgrounds extends into the border or not.

