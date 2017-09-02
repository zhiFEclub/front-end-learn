# 用 jQuery 做计算器
## 前提条件  
* [选择元素](http://www.jianshu.com/p/5c2bbbd0efc6)
* [获取和设置元素信息](http://www.jianshu.com/p/085a1018cd00)
* [事件](http://www.jianshu.com/p/cc5565de98fd)

## 概要
类型：实践
难度：中等  

## 任务描述
实现如下图所示的计算器
![](http://upload-images.jianshu.io/upload_images/7219342-820eaca234095ea5.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

要求：

1. 输入框不能输入内容。
1. 按数字，数字会输出在输入框中。
1. 按等号，计算结果，输出在输入框。

具体见[这里](https://zhifeclub.github.io/front-end-learn/resource/task/jquery/calculator/demo.html)。

实现思路提示：  

1. 计算器的操作符（加减乘除）都需要两个操作数。所有用两个变量分别来存左操作数和右操作数。
1. 用一个布尔值的变量来记录，现在在操作左操作数还是右操作数。开始的时候，是左操作数。
1. 如果用户点击的数字或`.`，在当前操作数上用字符串拼接用户的输入。并输出。
1. 如果用户点击操作符。则操作数由左操作数改成右操作数。并记录操作符。输出内容清空。
1. 如果用户点击等号。计算结果。将结果赋给左操作符，并输出。操作数改成左操作数。