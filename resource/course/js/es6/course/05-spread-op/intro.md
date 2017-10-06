# 扩散操作符(Spread Operator)和剩余操作符(Rest Parameters)
## 扩散操作符
扩散操作符的写法是`...`。用扩散操作符可以方便做的数组，对象的复制，合并操作等。如
```
var arr = [1, 2, 3]
var arr2 = ...arr // 复制数组

var arr3 = [0, ...arr, 4] // [0, 1, 2, 3, 4]

var obj = {a: 1}
var obj2 = {b:2, ...a} // {a:1, b:2}

Math.max(...[1, 2, 3]) // 等效于 Math.max(1, 2, 3)

[a, , ...rest] = [1, 2, 3, 4, 5]// 配合解构 a:1, rest: [3,4,5]
```

## 剩余操作符

