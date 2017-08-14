# Flex 布局介绍
建议学习时长： 45分钟  
学习方式：深入  

## 学习目标
* 能用 Flex 来实现元素的水平居中，两端对齐和垂直居中。

## 详细介绍
Flex布局，可以简便、完整、响应式地实现各种页面布局。  

Flex 的语法见 [这里](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)。

下面是一些示例

## 多个元素在一行
HTML
```
<div class="ly">
  <div class="ly__item">xxx</div>
  <div class="ly__item">xxx</div>
  <div class="ly__item">xxx</div>
  <div class="ly__item">xxx</div>
</div>
```

CSS

```
.ly {
    display: flex;
}
```

## 多个元素水平居中对齐
```
.ly {
  display: flex;
  justify-content: center;
}
```

## 多个元素水平两端对齐
```
.ly {
  display: flex;
  justify-content: space-between;
}
```

## 多行多个元素水平两端对齐
```
.ly {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
```

## 多个元素在一行，某个元素占据剩余部分
```
.ly {
  display: flex;
}
// 给占据剩余部分的元素加该类名
.ly__item--fill {
  flex-grow: 1;
}
```

## 多个元素水平居右对齐
```
.ly {
  display: flex;
  justify-content: flex-end;
}
```

## 多个元素垂直居中
```
.ly {
  display: flex;
  align-items: center;
}
```

## 多个元素水平垂直居中对齐
```
.ly {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## 更多学习资源
* [一个完整的Flexbox指南](http://www.w3cplus.com/css3/a-guide-to-flexbox-new.html)
