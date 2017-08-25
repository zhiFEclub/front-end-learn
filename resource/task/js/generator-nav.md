# 动态生成网站导航
## 前提条件  
* [DOM](http://www.jianshu.com/p/c328019a4bf4)

## 概要
类型：实践
难度：中等  

## 任务描述
给定如下的数据
```
[{
  name: '软件使用',
  list: [{
      name: 'Chrome 开发者工具',
      url: 'http://www.css88.com/doc/chrome-devtools/'
    },{
      name: '如何优雅地使用Sublime Text',
      url: 'http://www.jeffjade.com/2015/12/15/2015-04-17-toss-sublime-text/'
    }
},
{
  name: '文档导航',
  list: [{
    name: 'Markdown 参考',
    url: 'http://warpedvisions.org/projects/markdown-cheat-sheet'
  }
}]
```

要求：根据上面的数据，用 JavaScript 生成如下的HTML，并添加的页面中：
```
<div class="navs">
  <ul>
    <li>
      <h2>软件使用</h2>
      <ul>
        <li><a href="http://www.css88.com/doc/chrome-devtools/">Chrome 开发者工具</a></li>
        <li><a href="http://www.jeffjade.com/2015/12/15/2015-04-17-toss-sublime-text/">如何优雅地使用Sublime Text</a></li>
      </ul>
    </li>
    <li>
      <h2>文档导航</h2>
      <ul>
        <li><a href="http://warpedvisions.org/projects/markdown-cheat-sheet">Markdown 参考</a></li>
      </ul>
    </li>
  </ul>
</div>
```