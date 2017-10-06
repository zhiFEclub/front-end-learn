# ES6 第4天打卡内容
题1: 将下面的代码改写成用箭头函数的写法：
```
var arr = [1, 2, 3]
arr.filter(function(item) {
  return item % 2 === 1
})

arr.reduce(function(prev, curr) {
  return prev + curr
}, 0)

```

题2: 思考下面代码的在控制台输出的值：
```
function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var f = foo.call({id: 1});

var t1 = f.call({id: 2})()();
var t2 = f().call({id: 3})();
var t3 = f()().call({id: 4});
```



