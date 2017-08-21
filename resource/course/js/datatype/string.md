# JavaScript内置对象之字符串
建议学习时长： 30分钟  
学习方式：深入  

## 学习目标
* 知道什么是字符串
* 了解字符串的常见方法

## 详细介绍
## 概述
见这里 http://javascript.ruanyifeng.com/stdlib/string.html

## 常见方法
## 获取字符串信息
* 是否是字符串
```
typeof 'abc' === 'string'; // 返回 true
typeof {} === 'string'; // 返回 false
typeof 123 === 'string'; // 返回 false
```

* [string.indeOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) - 查询字符串中是否包含指定子字符串。若存在，则返回子字符串在字符串中的下标，否则返回 -1。
```
var str = 'abcde';
str.indexOf('b'); // 返回 1
str.indexOf('cd'); // 返回 2
str.indexOf('###'); // 返回 -1
```
* string.length - 返回数组长度
```
var str = 'abcde';
str.length; // 返回 5
```
* [string.charAt(下标)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) - 取字符串中指定下标的字符。如果下标小于0或大于字符串长度，返回空字符。取指定下标的字符也可以用 string[下标]。
```
var str = 'abc';
str.charAt(1); // 返回 'b'
str[1]; // 返回 'b'
str.charAt(4); // 返回 ''yy
str.charAt(-1); // 返回 ''
```
* [string.substring(开始下标[, 结束下标])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) - 取字符串中指定范围的子字符。
```
var str = 'abcde';
str.substring(1);// 返回 'bcde'
str.substring(1,3);// 'bc'
str.substring(0,3);// 'abc'
```
* [string.substr(开始下标[, 长度])](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr) - 取字符串中指定范围的子字符。
```
var str = 'abcde';
str.substr(1);// 返回 'bcde'
str.substr(1,3);// 返回 'bcd'
str.substr(0,3);// 返回 'abc'
```

## 字符串变换
* [string.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) - 将字符串中的部分内容替换。
```
var str = 'My name is {name}';
str.replace('{name}', 'Joel'); // 返回 'My name is Joel'
str; // 返回 'My name is {name}'
str = 'abc';
// 转成大写
str.replace(/[a-z]/, function(item){
  return item.toUpperCase();
});// 返回 'Abc'
str.replace(/[a-z]/g, function(item){
  return item.toUpperCase();
});// 返回 'ABC'
```
* [string.toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) - 将字符串变成大写。
```
var str = 'abc1';
str.toUpperCase(); // 返回 'ABC1'
str; // 返回 'abc1'
```
* [string.toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase) - 将字符串变成小写。
* [string.trim](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) - 去除字符串两头的空格(包括 space, Tab 等)。IE 9+ 支持该方法。
```
var str = '   abc   ';
str.trim(); // 返回 'abc'
str; // 返回 '   abc   '
// 对于 IE 8 等老浏览器，可以做以下的兼容。如果用 jQuery ，可以用 $.trim(str)
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
```
* [string.split](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) - 将字符串分割成数组
```
var str = 'abc';
str.split(''); // 返回 ['a', 'b', 'c']
str; // 'abc'
str = 'a&b&c';
str.split('&'); // 返回 ['a', 'b', 'c']
str = 'a334b344c';
str.split(/\d+/); // 返回 ['a', 'b', 'c']
```
