# DOM
建议学习时长： 60分钟  
学习方式：了解  

## 学习目标
* 什么是DOM。
* 了解对元素，元素属性，元素的内容，样式的增删改查怎么写。
* 什么是事件，有哪些事件类型，什么是事件冒泡，哪些事件会冒泡。

## 详细介绍
DOM是JavaScript操作网页的接口，全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为一个JavaScript对象，从而可以用脚本进行各种操作（比如增删内容）。

浏览器会根据DOM模型，将结构化文档（比如HTML和XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。所以，DOM可以理解成网页的编程接口。

注意：原生的DOM操作只需了解。实际项目中，用原生的DOM操作很少，一般都是用 jQuery 或 Vue.js 之类的MVVM 的框架。

### 常见方法
## 选取元素
```
document.querySelector('a') // 返回找到的第一个，不存在返回 null
document.querySelectorAll('a') // 返回所有，类型是 NodeList。不存在返回长度为 0 的 NodeList
```

参数为 CSS的选择器。

## 遍历元素
```
[].slice.call(document.querySelectorAll('a')).forEach(function(el, index){
  console.log( index + ": " + el.innerHTML );
})
```


## 创建元素
```
var newEl = document.createElement('div')
```

## 复制元素
```
el.cloneNode(true)
```

## 元素的末尾插入子元素
```
el.appendChild(newEl)
```

## 元素的开始插入子元素
```
el.insertBefore(newEl, el.firstChild)
```

## 当前元素前面插入元素
```
el.parentNode.insertBefore(newEl, el)
```

## 当前元素后面插入元素
```
el.parentNode.insertBefore(newEl, el.nextSibling)
```

## 删除元素
```
el.parentNode.removeChild(el)
```

## 判断两个元素是否相等
```
el === otherEl
```

## 表单元素
### 获取/设置值
```
document.querySelector('#my-input').value // 获取
document.querySelector('#my-input').value = 3 // 设置
```

## 单选/复选框选中状态
```
document.querySelector('input[type=checkbox]').checked
document.querySelector('input[type=checkbox]').checked = true
```

## 内容
```
el.textContent
el.textContent = 'xxx'
el.innerHTML
el.innerHTML = 'xxx'
```

## 属性
```
el.getAttribute('href')
el.setAttribute('href', 'xxx')
el.tagName
```

## 类名
```
el.classList.add(className)
el.classList.remove(className)
el.classList.contains(className) // hasClass
```

## 样式
```
// 注意：此处为了解决当 style 值为 auto 时，返回 auto 的问题
var win = el.ownerDocument.defaultView;
// null 的意思是不返回伪类元素
win.getComputedStyle(el, null).color; // 获取元素的颜色

el.style.color = '#ff0011'

```

## 尺寸
```
// 与 jQuery 一致（一直为 content 区域的高度）
function getHeight(el) {
  const styles = this.getComputedStyle(el);
  const height = el.offsetHeight;
  const borderTopWidth = parseFloat(styles.borderTopWidth);
  const borderBottomWidth = parseFloat(styles.borderBottomWidth);
  const paddingTop = parseFloat(styles.paddingTop);
  const paddingBottom = parseFloat(styles.paddingBottom);
  return height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom;
}
// 精确到整数（border-box 时为 height 值，content-box 时为 height + padding + border 值）
el.clientHeight;
// 精确到小数（border-box 时为 height 值，content-box 时为 height + padding + border 值）
el.getBoundingClientRect().height;

```

## 事件
请先阅读
* [事件模型](http://javascript.ruanyifeng.com/dom/event.html)
* [事件种类](http://javascript.ruanyifeng.com/dom/event-type.html)

绑定事件的写法
```
el.addEventListener('click', function(event){
  console.log(this.innerHTML)
})
// 删除事件
el.removeEventListener('click', function(event){
  console.log(this.innerHTML)
})
```

## 推荐阅读
* [You Don't Need jQuery](https://github.com/oneuijs/You-Dont-Need-jQuery/blob/master/README.zh-CN.md)

