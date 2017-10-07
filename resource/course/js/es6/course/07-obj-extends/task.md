# ES6 第7天打卡内容
补全下面的函数，实现将传入的参数合并做为一个新的对象返回。如果传入的一些参数类型不是对象，则忽略。
```
function extend(...objs) {
  // 你的代码
}
```

如：
```
extend({a:1, d: 11}, {b:2}, {c: 5, a: 10}) // 返回 {a:10, b:2, c: 5, d: 11}
extend(2, 5, {b: 3}, {d: 4}) // 返回 {b: 3, d: 4}
```