# Vue.js 组件
建议学习时长： 45分钟  
学习方式：了解  

## 学习目标
* 知道如何创建组件。
* 知道如何向组件传值。
* 知道如何处理组件触发的事件。

## 详细介绍
> 组件 (Component) 是 Vue.js 最强大的功能之一。组件可以扩展 HTML 元素，封装可重用的代码。在较高层面上，组件是自定义元素，Vue.js 的编译器为它添加特殊功能。

通读[组件](https://cn.vuejs.org/v2/guide/components.html)的介绍。


## 组件通信
## 父组件传递数据给子组件
父组件使用 Prop 传递数据给子组件。
```
<child-component :prop1="父组件的数据1" :prop2="父组件的数据2"></child-component>
```

子组件只接收在子组件定义的 props的值。通过 `this.prop名称` 获得父组件传数据。
```
// 子组件
Vue.component('child-component', {
  props: ['prop1', 'prop2'], // 定义接收哪些 props
  template: '<div>{{prop1 + prop2}}</div>',
  ...
}
```

## 父组件调用子组件属性或方法
给要调用的子组件起个名字。将名字设置为子组件 `rel` 属性的值。
```
<!-- 子组件。 ref的值是组件引用的名称 -->
<child-component ref="aName"></child-component>
```

父组件中通过 `$refs.组件名` 来获得子组件，也就可以调用子组件的属性和方法了。
```
var child = this.$refs.aName
child.属性
child.方法()
```

父组件通过 `$children` 可以获得所有直接子组件（父组件的子组件的子组件不是直接子组件）。需要注意 $children 并不保证顺序，也不是响应式的。

Vue 在 V2.1.0 版本后增加了的 `Scoped Slots` 的特性。该特性支持在子组件的 `slot` 中用子组件的数据。用法是：子组件在 `slot` 上定义传给父组件的数据，父组件通过 `scope` 属性来拿子组件数据。如
```
<!-- 子组件 -->
<slot :describe="describe"></slot>

<!-- 父组件 -->
<child-component >
  <template scope="childScope">
    子元素传给父组件的数据：{{childScope.describe}}
  </template>
</child-component>
```

详情见[这里](https://github.com/vuejs/vue/releases/tag/v2.1.0)。

## 子组件传递数据给父组件
子组件通过事件传递父组件传数据。子组件通过`$emit(eventName)`触发事件，父组件通过`$on(eventName)`监听事件。
```
<child-component @somesth-happen="handlerHappen"></child-component>
```

`somesth-happen` 是事件名称，`handlerHappen` 是触发后，父组件的处理函数。


## 子组件调用父组件属性或方法
子组件通过 `$parent` 获得父组件，通过 `$root` 获得最上层的组件。
