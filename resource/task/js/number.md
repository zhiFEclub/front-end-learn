# 数字操作练习
## 前提条件  
* [JavaScript 的基础语法](http://www.jianshu.com/p/162f37ffbb1a)
* [内置对象及其常用方法的介绍](http://www.jianshu.com/p/92fc2c512de4)
* [数值](http://www.jianshu.com/p/38171f010b2d)

## 概要
类型：实践
难度：简单  

## 任务描述
**题 1: 判断是否是正数**
编写函数 `isPositive`，来判断输入值是不是正数。满足
```
isPositive(3) // 返回 true
isPositive(3.14) // 返回 true
isPositive(0) // 返回 true
isPositive(-3) // 返回 false
isPositive('3') // 返回 true
isPositive('xxx') // 返回 true
```

***


**题 2:加法**
编写函数 `add`，来做加法。满足
```
add(3) // 返回 3
add(3, 4) // 返回 7
add('3', '4') // 返回 7
add('xx', 3) // 返回 false
```

***



**题 3:随机整数**
编写函数 `randomInt` ，来生成值介于 5（不包含5） 到 10（包含10）的之间的随机整数。满足
```
randomInt() // 6
randomInt() // 9
randomInt() // 10
```