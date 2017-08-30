# Vue.js 模板语法
建议学习时长： 60分钟  
学习方式：深入  

## 学习目标
* 知道如何创建个 Vue 实例。知道实例上的数据和函数应该怎么写。
* 知道如何遍历数据，条件输出数据。
* 知道如何绑定事件。

## 详细介绍
Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML ，所以能被遵循规范的浏览器和 HTML 解析器解析。

看这几块：
* [Vue 实例](https://cn.vuejs.org/v2/guide/instance.html)
* [模板语法](https://cn.vuejs.org/v2/guide/syntax.html)
* [条件渲染](https://cn.vuejs.org/v2/guide/conditional.html)
* [列表渲染](https://cn.vuejs.org/v2/guide/list.html)
* [事件处理器](https://cn.vuejs.org/v2/guide/events.html)

下面是一些示例：

#### 循环数组
```
<ul>
  <li v-for="item in items">{{ item.message }}</li>
  <!-- 获取当前数组下标 -->
  <li v-for="(item, index) in items"> 第{{ index }}条:{{ item.message }}</li>
  <!-- 通过加key ，让 Vue 能跟踪节点的身份，从而提高性能。key 的值是在数组中是不能重复的。 -->
  <li v-for="item in items" :key="item.id"> {{ item.message }}</li>
</ul>
```

items 的结构类似这样
```
[{
  id: 1,
  message: 'foo'
}, {
  id: 2,
  message: 'bar'
}]
```

#### 循环对象
```
<li v-for="(value, key) in obj">key is {{key}}, value is {{value}}</li>
```

#### 循环数字
```
<!-- n 从 1 开始  -->
<span v-for="n in 10">{{ n }} </span>
```

### 条件
```
<!-- 如果ok为false, 不输出在 HTML 中 -->
<div v-if="ok">Yes</div>
<div v-else>No</div>

<!-- 如果ok为false,只是 display:none 而已 -->
<h1 v-show="ok">Hello!</h1>
```

### 事件绑定
```
<button v-on:click="say('hi')">点击</button>
<!-- 简写 -->
<button @click="say('hi')">点击</button>
<!-- 传入 event 对象 -->
<button @click="say('hi', $event)">点击</button>
<!-- 阻止单击事件冒泡 -->
<button @click.stop="doSth">点击</button>
<!-- 阻止默认行为 -->
<button @submit.prevent="doSth">点击</button>
<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
<div @click.self="doThat">...</div>
<!-- 修饰符可以串联 -->
<a @click.stop.prevent="doThat"></a>
<!-- 按键修饰符：回车时才会执行 -->
<input @keyup.13="submit"><!-- 13 为 keycode -->
<input @keyup.enter="submit">
<!-- 支持的按钮有 enter, tab, delete, space, up, down, left, right -->
```

### 绑定属性
```
<div v-bind:class="{ 'class-a': isA, 'class-b': isB }"></div>
<div v-bind:class="classArr"></div> <!-- classArr 是一个数组 -->
<!-- 简写 -->
<div :class="{ 'class-a': isA, 'class-b': isB }"></div>
<div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
![](imgSrc)
<a :href="baseURL + '/path'">
```

如果属性值是变量，必须用绑定属性的写法。
```
// wrong
![]({{imgSrc}})
// right
![](imgSrc)
```

### 避免闪烁： v-cloak
```css
[v-cloak] {
  display: none;
}
```

```
<div v-cloak>
  {{ message }}
</div>
```

编译结束后，Vue 会删除元素上的 cloak 属性。

### 输出 HTML
```
<div v-html="raw_html"></div>
```

注意：只在可信内容上使用 v-html，永不用在用户提交的内容上，否则会导致[XSS攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。

## 计算属性
```
<div id="demo">{{fullName}}</div>
```

```
new Vue({
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
});
```