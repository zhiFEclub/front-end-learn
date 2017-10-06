# 箭头函数
ES6 允许使用“箭头”（=>）来定义函数。

使用箭头函数，可以在不影响代码可读性的情况下，少写代码。如
```
var f = function(v) {
  return v;
}
```

用箭头函数只需这么写
```
var f = v => v
```

## 用法
* () => ... // 函数值内容只要一行，可省略 {}
* () => { ... } // 零个参数用 () 表示；
* x => { ... } // 一个参数可以省略 ()；
* (x, y) => { ... } // 多参数不能省略 ()

更多内容见[这里](http://es6.ruanyifeng.com/#docs/function#箭头函数)。

## 拓展阅读
* [深入理解ES6箭头函数的this以及各类this面试题总结](http://blog.csdn.net/yangbingbinga/article/details/61424363)