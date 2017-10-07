# 对象的拓展
## 对象属性的简写
当对象的属性名和变量名一样时，可以简写。如
```
var x = 3
var y = 4
{x, y} // 相当于 {x:3, y:4}
```

## 对象方法的简写
```
const o = {
  method() {
    return "Hello!";
  }
};

// 等同于

const o = {
  method: function() {
    return "Hello!";
  }
};
```

## Object.assign()
`Object.assign`方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。

我们写组件的时候，一般都会这么写
```
var settings = Object.assign({}, defaultSettings, userSettings)
```

**注意：Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。**

## Object.is()
`Object.is`方法用来判断两个值是否相等，和 `===` 类似，比较时不会进行类型转换。不同点是
```
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

所以用 Object.is 来判断两个值是否相等比用 `===` 更靠谱。