# JavaScript 语法概要
建议学习时长： 90分钟  
学习方式：深入  

## 学习目标
* 知道 JavaScript 写在哪
* 知道这些概念：语句，变量，标识符
* 知道怎么定义变量，给变量赋值，定义和调用函数，怎么写注释。

## 详细介绍
### JavaScript 写在哪
方式1 写在文件里  
JavaScript 可以写在后缀名为 `js` 的文件里。如
```
// 该内容的文件名是 main.js
alert('Hello')
```

然后页面上要引入该js文件
```
<script src="js的路径/main.js"></script>
```

方式2 直接写在页面里  
```
<script>
alert('Hello')
</script>
```

## 语句
语句（statement）是为了完成某种任务而进行的操作。如
```
var a = 3;
```

语句一般以 `;` 结尾。刚开始写的时候，每个语句都加`;`。

## 变量
变量是对值的引用，使用变量等同于引用一个值。每一个变量都有一个变量名。

### 声明变量
声明变量需用 `var`。
```
var a;
```
上面的代码即声明了变量名为 a 的变量。同一条var命令中声明多个变量，如
```
var a, b, c;
```

### 给变量赋值
声明变量后，就可以给变量赋值。
```
a = 3;
```
注意：如果变量没声明就赋值，会报错。可以在声明变量的同时赋值，如
```
var a = 3;
```

## 标识符
标识符（identifier）是用来识别具体对象的一个名称。最常见的标识符就是变量名，以及后面要提到的函数名。JavaScript语言的标识符对大小写敏感，所以a和A是两个不同的标识符。

合法的标识符： 字母，数字和下划线；不能以数字打头。列举几个合法的标识符
```
name
i18N
_sayIt
find_answer
```

## 代码块
用大括号，将多条相关的语句组合在一起，称为代码块。如
```
if(isSunny){
  var weather = '晴天';
  console.log('今天是' + weather);
}
```
## 运算符
运算符是处理数据的基本方法。常见的运算符有 `+`,`-`,`*`,`/`,`&&`, `||`,`!`。具体见这里
http://javascript.ruanyifeng.com/grammar/operator.html 。

## 流程控制

## 条件
条件语句提供一种语法构造，只有满足某个条件，才会执行相应的语句。JavaScript提供if结构和switch结构，完成条件判断。

```
var a = 3;
if(a > 1){
  
} else if(a < 0){
  
} else {
  
}

switch(a){
  case 1:
    break;
  case 2:
    break;
  case 3:
    break;
  default:
    break;
}
```

## 循环
```
var i = 0;
while(i < 10){
  // doSth
  i++;
}

for(var i = 0; i < 10; i++){
  // doSth
}
```

## 函数
函数就是一段可以反复调用的代码块。函数还能接受输入的参数，不同的参数会返回不同的值。

定义函数：
```
function add(param1, param2) {
    return param1 + param2;
}
```

add 是函数名词。
param1, param2 是两个参数。  
return 后面的是函数的返回值。用返回值来传递代码处理的结果。  

调用函数
```
add(3, 4) // 返回值是 7
```



## 注释
注释即对代码的解释。注释不会被执行。Javascript 提供两种注释：单行注释，多行注释。例如
```
// 这是单行注释

/*
 这是
 多行
 注释
*/
```

## 更多学习资源
* [JavaScript 标准参考教程（alpha）-阮一峰](http://javascript.ruanyifeng.com/)
* [JavaScript简易教程 - 颜海镜](http://yanhaijing.com/basejs/)
