# JavaScript内置对象之对象
建议学习时长： 60分钟  
学习方式：深入  

## 学习目标
* 知道什么是对象
* 知道如何获取和设置对象的值

## 详细介绍
对象是一种无序的数据集合，由若干个“键值对”（key-value）构成。如：
```
var student = {
  name: 'Joel',
  age: 18,
  hobby: ['编码', '看剧'],
}
```

上面代码中，大括号就定义了一个对象。`name`,`age`,`hobby` 是对象的键(key), 对应的值为 `Joel`,`18`,`['编码', '看剧']`。通过键可以拿到值，如 `student.name` 的值是 `Joel`。

一个对象可以有任意多个键值。JavaScript的所有数据都可以被视为对象。

### 获取对象的值
有两种方式

方式1 `对象.键`，如
```
student.name
```

方式1 `对象[键]`，如
```
student['name']
```

或
```
var keyName = 'name'
student[keyName]
```

## 设置对象的值
`对象.键 = 值`,如
```
var obj = {}
obj.name = 'xxx'
```

## 更多学习资源
* [对象](http://javascript.ruanyifeng.com/grammar/object.html)

