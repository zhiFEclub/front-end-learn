# JavaScript 介绍
建议学习时长： 20分钟  
学习方式：了解  

## 学习目标
* 知道什么是编程语言
* JavaScript 是做什么的

## 详细介绍
### JavaScript 是什么
> JavaScript 是一种编程语言。

人与人沟通的语言称为自然语言，人与计算机沟通的语言称为编程语言。编程语言和自然语言的主要不同点是：自然语言表述的内容可以是有多种意思，编程语言表述的内容不会有歧义，这样可以保证，计算机不会误解你的意思。

世界上有成千上万种的编程语言，如 `Python`，`Java`，`Go`，`Lisp` 等。JavaScript 是其中的一种。JavaScript 简称为 JS。

程序是指用编程语言写的，给计算机执行的文本。编程就是编写程序。

### JavaScript 可以在哪运行
> 凡是可以用 JavaScript 来写的应用，最终都会用 JavaScript 来写。 —— Atwood定律

最初，JavaScript 只能在浏览器中运行。后来，大神 Ryan Dahl 为了打造高性能的 Web 服务器，倒腾出个 [Node.js](https://nodejs.org/en/)，于是 JavaScript 能在服务器上运行了。再后来，有人想， JavaScript 可以做网站，可以写服务器，为什么不能做桌面应用呢，于是就出现了用 JavaScript 来做桌面应用的工具：[Node Webkit](https://github.com/rogerwang/node-webkit) 和 [Electron](https://github.com/electron/electron)。有些手机应用中是内置浏览器的，这些应用这也运行着 JavaScript。

### JavaScript 的语言特点
> JavaScript 写法很灵活。

JavaScript 是一种面向对象的动态语言。它的语法来源于 Java 和 C，所以这两种语言的许多语法特性同样适用于 JavaScript。

什么是面向对象？动态语言又是什么鬼？不知道这些也没关系。随着慢慢地学习，你就会了解拉。

### 程序的核心
> 程序的核心的是数据和操作数据。

有一个网站的登录页面，用户输入用户名和密码，点击登录按钮，登录。在这个过程中，程序做的是，获取用户输入的用户名和密码，向服务器查询结果。用户名，密码和查询结果是数据，获取和查询是对数据的操作。

为了方便的操作数据，就会有变量，数据类型，运算符，条件，循环，函数等概念。

## 推荐阅读
* [趣谈 | Javascript：一个屌丝的逆袭](https://mp.weixin.qq.com/s?__biz=MzI1ODE4NzE1Nw==&mid=2247486028&idx=2&sn=2a0ba8d8824eedfc03f63cd37a87b89f&chksm=ea0d40b6dd7ac9a0cd2d941fcfe247400e12d71119b1173a3d0d5aea04f8d51772ae84f75e4b&mpshare=1&scene=1&srcid=0814KptAFbVh9FZ5ShpO8Zt8&key=b14ef81558367f701d5cf46cd2c90b08e6a51238fcf32bfb20a4542602ad635a680172dbe3449cfa180dd6d886d6b4495c7019869d643a84dc66d444b39c411e0f4747278273401d56bc55adc22760fa&ascene=0&uin=NDI4NTMwNTE1&version=12020610&nettype=WIFI&fontScale=100&pass_ticket=8Z6VRnJ3KEno5%2FsJi3jm2F7aWU8VHEBYUhN4uPFhUBp0nZCZwe3mgz0R%2FBpTV6pd)
* [JavaScript标准教程之导论与历史](http://www.jianshu.com/p/1397c469576d)