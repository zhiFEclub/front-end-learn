# 优秀前端源码解读汇总
![](http://upload-images.jianshu.io/upload_images/7219342-41705166ee44daa8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## [Normalize.css 中文文档与源码解读](https://github.com/Alsiso/normalize-zh)
> Normalize-zh.css 是根据对 Normalize.css 的源码分析后，经过学习与整理，将源代码中的英文注释文档翻译为中文版本，方便国内的开发者学习和使用。

## [逐行阅读 Bootstrap 源码](https://www.loyalsoldier.me/understand-bootstrap-source-code-line-by-line/)
> Bootstrap 是我接触前端开发时学习的第一个 CSS 框架，也是第一个完整看完文档的开源项目。在正式和非正式项目中多次使用 Bootstrap v3，也基本了解了 Bootstrap 的优缺点、如何定制 Bootstrap 等“高阶玩法”。
>
> 在自学前端开发的两年余时间里，裸写 CSS 代码时总能遇到一些没有见过的“古怪” CSS 语句和样式，而在使用 Bootstrap 时并不会出现此类问题，遂决定阅读 Bootstrap 项目中 CSS 部分的源码，看看到底是什么在“扰乱”开发者的视线，而 Bootstrap 为开发者提高效率做了哪些有趣的事情。

## [Underscore.js 源码解读 & 系列文章](https://github.com/hanzichi/underscore-analysis)
> 阅读一些著名框架类库的源码，就好像和一个个大师对话，你会学到很多。为什么是 Underscore？最主要的原因是 Underscore 简短精悍（约 1.5k 行），封装了 100 多个有用的方法，耦合度低，非常适合逐个方法阅读，适合楼主这样的 JavaScript 初学者。从中，你不仅可以学到用 void 0 代替 undefined 避免 undefined 被重写等一些小技巧 ，也可以学到变量类型判断、函数节流&函数去抖等常用的方法，还可以学到很多浏览器兼容的 hack，更可以学到作者的整体设计思路以及 API 设计的原理。

## [undersercore 源码分析](https://www.gitbook.com/book/yoyoyohamapi/undersercore-analysis/details)
> 起初，我分析 underscore 的源码只是想更深入的了解 函数式编程（Functional Programming），但分析结束后，我就觉得单纯的源码注释不足以记录我的收获、理解和感悟，所以我想把这些写下来，我粗略地将写作意图概括如下：
> 
> 函数式编程近些年非常火爆，诸如 haskwell 这样的纯函数式编程语言获得了非常高的社区活跃度。JavaScript 支持多范式编程，抛开 underscore 和 lodash 这样的生来为了函数编程的库不谈，诸如 redux 这样的库也大量运用了函数式编程，即便作为一个 react+redux 的业务开发者，想要深入理解的 redux 的实现机制，也不得不学习函数式编程。因此，学习函数式编程，将会成为 JavaScript 开发者的必须。
> 
> 在阅读 underscore 的源码期间，被作者 jashkenas（他同时也是 backbone 和 coffee 的作者）的功力深深折服，一些功能可能我也能写出，但绝对写不了如此健壮。所以，深入学习 underscore 源码，不仅有助于我们认识函数式编程，也能深化我们对于 JavaScript 中一些基础知识的理解和掌握。
> 
> 随着 backbone 的衰落和 lodash 的崛起，underscore 的热度已经不及当年，但是截止这篇文章的开始前的一个月，underscore 仍然有最新的 bug 修复，可见作者 jashkenas 仍然没有放弃 underscore 的维护。所以现在分析 underscore 的源码仍然不显得过时。相较于 lodash，underscore 的源码更加短小，也不太涉及 JavaScript 中的一些奇淫巧技，所以，分析 underscore 更加适合 JavaScript 开发者的进阶。在完成了 underscore 的源码分析后，希望我自己有时间，也希望读者有意愿再去分析 lodash 的源码，后者在性能和功能上都已经超越了 underscore，并且长时间霸占了 npm 了最热 package 的位置。

## [jQuery- v1.10.2 源码解读](https://github.com/chokcoco/jQuery-)
> jQuery 源码有些方法的实现特别长且繁琐，因为 jQuery 本身作为一个通用性特别强的框架，
一个方法兼容了许多情况，也允许用户传入各种不同的参数，导致内部处理的逻辑十分复杂，
所以当解读一个方法的时候感觉到了明显的困难，尝试着跳出卡壳的那段代码本身，
站在更高的维度去思考这些复杂的逻辑是为了处理或兼容什么，为什么要这样写，一定会有不一样的收获
其次，也是因为这个原因，jQuery 源码存在许多兼容低版本的 HACK 或者逻辑十分晦涩繁琐的代码片段
浏览器兼容这样的大坑极其容易让一个前端工程师不能学到编程的精髓
所以不要太执着于一些边角料，即使兼容性很重要，也应该适度学习理解，适可而止

## [jQuery v3.1.1 源码解读](https://github.com/songjinzhong/JQuerySource)
> 我虽然接触 jQuery 很久了，但也只是局限于表面使用的层次，碰到一些问题，找到 jQuery 的解决办法，然后使用。显然，这种做法的弊端就是，无论你怎么学，都只能是个小白。
> 
> 当我建立这个项目的时候，就表示，我要改变这一切了，做一些人想做，憧憬去做，但从没踏入第一步的事情，学习 jQuery 源码。
>
> 到目前为止，jQuery 的贡献者团队共 256 名成员，6000 多条 commits，可想而知，jQuery 是一个多么庞大的项目。jQuery 官方的版本目前是 v3.1.1，已经衍生出 jQueryUI、jQueryMobile 等多个项目。
> 
> 虽然我在前端爬摸打滚一年多，自认基础不是很好，在没有外界帮助的情况下，直接阅读项目源码太难了，所以在边参考遍实践的过程中写下来这个项目。

更多 jQuery 源码分析
* [Aaron 的 jQuery源码分析系列](http://www.cnblogs.com/aaronjs/p/3279314.html)
* [一扬的jQuery-1.7.1 源码阅读笔记](http://www.cnblogs.com/yiyang/p/4525544.html)

## [backbone源码解读](https://github.com/aircloud/backboneAnalyze)
> backbone是我两年多前入门前端的时候接触到的第一个框架，当初被backbone的强大功能所吸引(当然的确比裸写js要好得多)，虽然现在backbone并不算最主流的前端框架了，但是，它里面大量设计模式的灵活运用，以及令人赞叹的处理技巧，还是非常值得学习。个人认为，读懂老牌框架的源代码比会用流行框架的API要有用的多。
>
> 另外，backbone的源代码最近也改了许多(特别是针对ES6)，所以有些老旧的分析，可能会和现在的源代码有些出入。

## [vue成长系列文章](https://github.com/xiaofuzi/deep-in-vue)
> 从源码的角度看vue的成长历程。

## [Vuex 源码解析](https://juejin.im/post/5962c13c6fb9a06b9e11a6a9)
> 上一篇文章说的是如何阅读框架源代码，收到了“如果更详细一点就好了”的反馈，不如就以 Vuex 为切入点进行一次实践吧，不矫揉不造作，说走咱就走~~

## [Vuex框架原理与源码分析](http://tech.meituan.com/vuex-code-analysis.html)
> Vuex是一个专为Vue服务，用于管理页面数据状态、提供统一数据操作的生态系统。它集中于MVC模式中的Model层，规定所有的数据操作必须通过 action - mutation - state change 的流程来进行，再结合Vue的数据视图双向绑定特性来实现页面的展示更新。统一的页面状态管理以及操作处理，可以让复杂的组件交互变得简单清晰，同时可在调试模式下进行时光机般的倒退前进操作，查看数据改变过程，使code debug更加方便。

> 最近在开发的项目中用到了Vuex来管理整体页面状态，遇到了很多问题。决定研究下源码，在答疑解惑之外，能深入学习其实现原理。

## [vue-router 源码分析-整体流程](https://github.com/dwqs/blog/issues/53)
> 在前端框架 React、Vue.js 和 Angular 三足鼎立的年代, Vue.js 因其易用、易学、学习成本低等特点已经成为了广大前端er的新宠, 而其对应的路由 vue-router 也是简单好用, 功能强大. 本文将结合 Vue.js 来分析 vue-router 的整体流程.

## [从vue-cli源码学习如何写模板](https://github.com/dwqs/blog/issues/56)
> vue-cli 是 vuejs 官方提供的基于 vuejs 的项目脚手架工具, 可以很快的帮助 vuejs 开发者搭建一个 startup 项目, 免去环境配置的繁琐, 开箱即用. 今天就来看下 vue-cli 的实现.

## [redux 源码解读](https://segmentfault.com/a/1190000003791415)
> redux并不局限于flux与react。redux 自身保持简洁以便适配各种场景，让社区发展出各种 redux-* 中间件或者插件，从而形成它自己的生态系统。

## [Redux 源码解读（长文慎入）](https://www.kisnows.com/2017/08/17/redux-source-code-read/)
> Redux 的源码非常的精炼，短短几百行代码，去提供了强大的功能。

## [MobX 核心源码解析](https://qiutc.me/post/mobx-core.html)
> 深入 MobX 源码来解析其核心原理以及工作流程。