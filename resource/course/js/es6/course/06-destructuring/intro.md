# 解构赋值
从数组和对象中提取值，对变量进行赋值，这被称为解构赋值。

任何实现 [Iterator 接口](http://es6.ruanyifeng.com/#docs/iterator) 的，都支持解构赋值。

## 数组的解构赋值
```
let [a, b, c] = [1, 2, 3]
```

上面的 a, b, c 的值分别是 1, 2, 3。支持嵌套，如
```
let [foo, [[bar], baz]] = [1, [[2], 3]]
```

## 对象的解构赋值
```
let { foo, bar } = { foo: "aaa", bar: "bbb" };
foo // "aaa"
bar // "bbb"
```

对象，数组的解构赋值也可以混在一起
```
let obj = {
  p: [
    'Hello',
    { y: 'World' }
  ]
};

let { p: [x, { y }] } = obj;
x // "Hello"
y // "World"
```

## 解构赋值支持默认值
```
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
```

## 常见用途
### 交换变量的值
```
let x = 1;
let y = 2;

[x, y] = [y, x]
```

### 函数返回多个值
```
// 返回一个数组

function example() {
  return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象

function example() {
  return {
    foo: 1,
    bar: 2
  };
}
let { foo, bar } = example();
```

### 函数参数的默认值
```
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
}) {
  // ... do stuff
}
```

### 导入模块的指定内容
```
import {urls} from '@/setting'
```
