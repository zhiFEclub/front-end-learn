# JavaScript 的数据类型介绍
建议学习时长： 20分钟  
学习方式：了解  

## 学习目标
* 了解数据类型有哪些

## 详细介绍
> 编程语言按数据的类型进行分类。分类结果就是数据类型。

数据的种类是多种多样的。为了方便程序处理数据，编程语言按数据的类型进行分类。分类结果就是数据类型。

JavaScript 的数据类型有
* 数字
* 字符串
* 布尔值
* null
* undefined
* 对象

对不同的数据类型有不同的操作。对数字可以进行加，减，乘，除等操作，对字符串可以进行字符串连接，取子字符串等操作。

### 数字
年龄，重量等是数字类型。数字包括整数和小数。写法如下
```
1
5.14
```

### 字符串
姓名，爱好等是字符串类型。字符串的内容用单引号和双引号包围。写法如下
```
'Joel'
"I love coding！"
```

### 布尔值
布尔值表示真假。真是 `true`，假是 `false`。

### null
null 表示空。表示没有内容。

### undefined
undefined 表示未定义。如果没给变量赋值，那变量的初始值为 undefined。

undefined 和 null 有细微的区别。有时，我们会将变量的值设置成 null 而不会设置成 undefined。

### 对象
除了上面 5 种数据类型，其他类型都叫对象。常见的对象包括： 简单对象，数组，正则表达式对象，函数，日期等。

#### 简单对象
简单对象是一些值的集合。比如一个用户的数据，包含用户的姓名，年龄等内容。用简单对象表示用户的数据，这么写
```
var user = {
  name: 'Joel',
  age: 18,
  describe: 'I love coding!'
}
```

获取用户的姓名，这么写
```
user.name
```

修改用户的姓名，这么写
```
user.name = 'Jack'
```

### 数组
数组用来存多个相同数据类型的值。如，全部学生的考试成绩；待办事宜列表。用数组表示一些水果，这么写
```
var fruits = ['apple', 'banana', 'melon', 'pineapple']
```

获取第 3 个水果的值，这么写
```
fruits[2]
```

注意：数组的下标是从 0 开始的。

设置第 3 个水果的值，这么写
```
fruits[2] = 'pear'
```

## 如何知道数据的数据类型
typeof 可以知道数据的数据类型。如
```
typeof 1 // 值是 'number'
typeof 1.3 // 值是 'number'
typeof 'a' // 值是 'string'
typeof true // 值是 'boolean'
typeof false // 值是 'boolean'
typeof null // 值是 'object'。吃惊吗~
typeof undefined // 值是 'undefined'
typeof {} // 值是 'object'
typeof [] // 值是 'object'
```

