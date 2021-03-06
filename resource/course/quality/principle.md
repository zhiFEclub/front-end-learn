# 写出高质量代码的一些基本原则
建议学习时长： 30分钟  
学习方式：了解  

## 学习目标
* 了解写出高质量代码的一些基本原则

## 详细介绍
写出高质量的代码不是一朝一夕的事情，就如某某说的

> 谁在年轻的时候，没写坏几个项目呢？

写出高质量的代码的重点是
* 写前要多思考。
* 写完后自己和让高手 Review。
* 多写。
* 多看优秀技术文章和代码。

### 可读性
代码虽然是给计算机运行的，但也是给程序员看的。

### DRY 原则
DRY 是 Don't Repeat Yourself 的缩写。意思是说，在一个设计里，对于任何东西，都应该有且只有一个表示，其它的地方都应该引用这一处。这样需要改动的时候，只需调整这一处，所有的地方就都变更过来了。

如果发现重复代码，提取出来，做成函数，类，组件之类。

注意：DRY 也要适度：如果你尽“一切可能”从代码里提取模板，甚至把一些微不足道的“共同点”也提出来进行“共享”，会导致很差的可读性。

### KISS 原则
KISS 是英语 Keep It Simple, Stupid 的缩写。KISS原则是指在设计当中应当注重简约的原则。

具体来说，就是一个函数或一个类只做一件事。好处是：代码逻辑会变得简单，排错和测试也变得简单。

### 开放封闭原则
对扩展开放，意味着有新的需求或变化时，可以对现有代码进行扩展，以适应新的情况。  
对修改封闭，意味着类一旦设计完成，就可以独立完成其工作，而不要对类进行任何修改。

### 减少代码的影响范围
能用局部变量的不要用全局变量，能用类选择器的不要用标签选择器。

### 推荐阅读
* [Programming Principles](http://webpro.github.io/programming-principles/)
* [代码审查关注什么：SOLID 原则](http://www.jianshu.com/p/2cd98d697adc)

### 书籍推荐
* [编写高质量代码：Web前端开发修炼之道](https://item.jd.com/10060307.html)
* [代码整洁之道](https://item.jd.com/10064006.html)
