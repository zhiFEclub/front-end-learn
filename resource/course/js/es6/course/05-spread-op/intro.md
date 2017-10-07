# 扩散操作符(Spread Operator)和剩余操作符(Rest Parameters)
## 扩散操作符
扩散操作符的写法是`...`。用扩散操作符可以方便做的数组，对象的复制，合并操作等。如
```
// 复制数组
var arr = [1, 2, 3]
var arr2 = ...arr 

// 数组合并
var arr3 = [0, ...arr, 4] // [0, 1, 2, 3, 4]

// 对象合并
var obj = {a: 1}
var obj2 = {b:2, ...a} // {a:1, b:2}

Math.max(...[1, 2, 3]) // 相当于 Math.max(1, 2, 3)

// 配合解构 
[a, , ...rest] = [1, 2, 3, 4, 5]// a:1, rest: [3,4,5]
```

## 剩余操作符
剩余操作符的写法也是 ...，用于获取函数的多余参数，这样就不需要使用 `arguments` 对象了。如

```
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10
```

在上面的代码中，values 是数组。

需要注意的是剩余操作符之后不能再有其他参数（即只能是最后一个参数），否则会报错。

