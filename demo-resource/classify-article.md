# 用程序将一天的前端文章按关键字分类
在这个信息爆炸的时代，每天都会产生大量的信息。那如何快速的知道，某个行业今天大概发生了什么，以及找到自己感兴趣的呢？

## 实现思路
1. 获得一天的行业信息。
1. 提取信息的关键字。关键字能大体信息的主要内容。
1. 列出关键字，将信息按关键字进行分类。看关键字能大概知道某个行业发生了什么，可以看感兴趣的关键字分类下的内容。

以前端为例，我的做法是，
1. 抓取 [掘金网](https://juejin.im/) 最新的50条前端的数据。这边只是示例，如果要获得更多的信息可以从多个源抓更多条的数据。
1. 从每条信息的标题中提取关键字。也可以从正文去提取。
1. 列出关键字，将信息按关键字进行分类。

## 程序具体实现
我是用 Node.js 来实现的。具体如下：

1 抓取数据  
通过在掘金网上的操作，配合浏览器的开发者工具，可以知道，通过的接口（接口地址: https://timeline-merger-ms.juejin.im/v1/get_entry_by_timeline?src=web&limit=50&type=post&category=5562b415e4b00c57d9b94ac8），可以拿到最近的50条前端数据。 程序如下
```
var request = require('request')

var url = `https://timeline-merger-ms.juejin.im/v1/get_entry_by_timeline?src=web&limit=${LIMIT}&type=post&category=5562b415e4b00c57d9b94ac8`
const LIMIT = 50 // 50篇文章

request({
  url,
}, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    var list = JSON.parse(body).d.entrylist
  }
)
```
上面的 request 发 HTTP 的第三方库。 list 是拿到的数据。

2 提取关键字
提取关键字是用的第三方库[结巴分词](https://github.com/yanyiwu/nodejieba)。
```
var nodejieba = require("nodejieba")
const KEYWORDS_NUM = 1 // 从每篇文章的标题提取关键字数量
nodejieba.extract(标题, KEYWORDS_NUM)
```

为了让提取关键字的结果更准确，要设置专用词库和停用词库。
* 专用词指，一些不应该被拆开的词或解析语义时优先级比较高的词，如 `微信小程序`，会被拆成 `微信` 和 `小程序` 两个词。
* 停用词指没有意义的一些词。如 助词：的，地，得；标点之类的。

下面是我设置的专用词库（还不完善，要加更多条目）。
```
微信小程序
小程序
Node.js
```

拿到了关键字，如果关键字拼写有问题要改正。关键字 `js`，`javascript` 的正确拼写是 `JavaScript`。我列了些
```
// 不规则的拼写标准化
var standardWords = {
  'html': 'HTML',
  'Html': 'HTML',
  'css': 'CSS',
  'js': 'JavaScript',
  'javascript': 'JavaScript',
  'dom': 'DOM',
  'Dom': 'DOM',
  'SCSS': 'Sass',
  'sass': 'Sass',
  'angular': 'Angular',
  'vue': 'Vue.js',
  'vue.js': 'Vue.js',
  'webpack': 'Webpack'
}
```

3 列出关键字，将信息按关键字进行分类
这块主要是数据结构的设计。我先用下面的结构对关键字进行分类
```
var resObj = {
  '关键字1' : [文章1, 文章2,...]
  '关键字2' : [文章1, 文章2,...],
  ...
}
```

要输出的时候，在遍历上面的对象，生成一个数组。然后按照关键字下文章的数量，从多到少排序。数据结构如下：
```
var resArr = [{
  keyword: '关键字1',
  num: '数量',
  list: [文章1, 文章2,...]
},
...]
```

最后，遍历上面的数组，将内容输出即可。

运行结果见 [知行社的前端早读课 第7期](http://www.jianshu.com/p/7b3a54ebb4f7) 最后。

完整程序地址： https://github.com/zhiFEclub/front-end-learn/blob/master/zaoduke/spider/main.js