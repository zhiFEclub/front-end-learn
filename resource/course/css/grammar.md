# CSS 语法
建议学习时长： 45分钟  
学习方式：深入  

## 学习目标
* 知道 CSS 怎么写。
* 知道在页面中引入 CSS。

## 详细介绍
### CSS 的组成部分
CSS 由**选择器**和**声明**两部分组成。声明由**属性**和**值**组成。  

选择器用来指定设置外观的HTML元素。声明用来设置选择器指定元素的外观的具体内容。  
看下面的代码：
```
.intro{
    width: 100px;
    height: 200px;
    color: red;
    background-color:green;
}
```

其中
* `.intro` 为选择器。
* `{}` 中的内容为声明。
* `width,color` 为声明的属性
* `100px,#f00` 为声明的值

上面的代码，将所有类名中有 `intro` 的元素设置这样的外观：宽 100像素，高 200像素，字体颜色是红色，背景色是绿色。

### 样式写在哪里
页面中写样式有3种方式。

**方式1: 写在一个单独的文件里**
写在一个文件里的样式叫做外部样式表。    
这样的文件的后缀名为`css`。    
例如,`mystle.css`文件中的内容
```css
hr {color: sienna;}
p {margin-left: 20px;}
body {background-image: url("images/back40.gif");}
```

页面中用外部样式表要用`link`标签，例如
```
<link rel="stylesheet" type="text/css" href="path/to/mystyle.css" />
```
href。
`link`标签要放在`head`标签中。否则页面可能会闪烁。

**方式2:写在`style`标签内**
写在`style`标签内的样式称为内部样式表。例如
```
<style>
  hr {color: sienna;}
  p {margin-left: 20px;}
  body {background-image: url("images/back40.gif");}
</style>
```

**方式3:写在标签的`style`属性里**
写在标签的`style`属性里的样式称为，称为内联样式。例如
```
<p style="color: sienna; margin-left: 20px">
This is a paragraph
</p>
```

内联样式是针对的当前元素，所有也不用写选择器。

## 外部样式表，内部样式表，内联样式 哪种方式好
外部样式表，内部样式表，内联样式各自各的使用场景。  
在通常情况下，推荐使用外部样式表。不建议使用内部样式表和内联样式。

原因：
外部样式表  
* 能被复用
* 能被缓存







