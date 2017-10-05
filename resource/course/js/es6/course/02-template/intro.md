# ES6 模板字符串
> 模板字符串（template string）是增强版的字符串，用反引号（\`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。

模板字符串让字符串拼接变得方便。如
```
var title = 'Bable升级到6啦'
var html = '<h1>' + title + '</h1>'
```

用模板字符串这么写
```
var title = 'Bable升级到6啦'
var html = `<h1>${title}</h1>`
```

**要注意的是，模板字符串里的变量的值取模板字符串定义时，变量的值，以后变量的值改变，模板字符串的值并不会变。**

## 拓展阅读
* [字符串的拓展:标签模板](http://es6.ruanyifeng.com/#docs/string#标签模板)
* [字符串的拓展:String.raw()](http://es6.ruanyifeng.com/#docs/string#String-raw)