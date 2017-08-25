# 数组操作练习
## 前提条件  
* [数组](http://www.jianshu.com/p/5c0db5c18575)

## 概要
类型：实践
难度：中等  

## 任务描述
**题 1：查找数组对象中 age 大于 18 对象**
编写函数 `filterAdult`,满足
```
filterAdult([
  {age: 19, name:'Jack'},
  {age: 5, name:'Apple'},
  {age: 12, name:'Lynn'},
  {age: 25, name:'David'}
]);
// 输出
[
  {age: 19, name:'Jack'},
  {age: 25, name:'David'}
]
```

***
**题 2：判断数组中是否所有的数字都大于 0**
编写函数 `isAllNumPosive`,满足
```
isAllNumPosive([1, 2, 3, 4]);  // 输出 true
isAllNumPosive([1, 2, 3, 4, -1]);  // 输出 false
isAllNumPosive([1, 2, 3, 4, 'a', {a:3}]);  // 输出 true
```

***
**题 3：改变传入的数组，将数组中第 n(从 0 开始算 ) 个元素放到数组的开头**
编写函数  `putFirst`,满足
```
var arr = [1, 2, 3, 4];
putFirst(arr, 2);
// 此时 arr为 [3, 1, 2, 4]
```

***

**题 4: 将 arguments 对象转换成数组**
编写函数 `toArray`,满足
```
(function(){
  var arr = toArray(arguments);
  Array.isArray(arr); // 输出 ture
})(1, 2);
```
***

**题 5：将数组中数字内容求和 **
编写函数 `sum`,满足
```
sum([1, 2, 3, 4]);  // 输出 10 
sum(['a', 1, 2, {a:3}, 3, 4, 1.2]);  // 输出 11.2
```

***

**题 6: 将数组元素按 age 字段的值，从小到大排序**
编写函数 `sortAge`,满足
```
sortAge([
  {age: 19, name:'Jack'},
  {age: 5, name:'Apple'},
  {age: 12, name:'Lynn'},
  {age: 25, name:'David'}
]);
// 输出
[
  {age: 5, name:'Apple'},
  {age: 12, name:'Lynn'},
  {age: 19, name:'Jack'},
  {age: 25, name:'David'}
]
```

***

**题 7: 将数组元素去重,其中数组元素均为基本类性**
编写函数 `uniq`,满足
```
uniq([1,2,2,3,4,4,4,4]); // 输出 [1,2,3,4]
uniq([1,2,'M','e','r', 'r', 'y']); // 输出 [1,2,'M','e','r','y']
```

***

**题 8: 将数组内容乱序**
编写函数 `random`,满足
```
random([1,2,3,4]); // 输出的可能是 [1,2,3,4] 或 [1,3,4,2] 或 [3,4,1,2] 等等随机可能
```
