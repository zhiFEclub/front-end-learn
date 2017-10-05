# ES6 第2天打卡内容
将下面的代码改写成用模板字符串的写法：
```
function makeListHTML(arr) {
  return '<ul>' + 
      arr.map(function(item){
        return '<li>' + 
            '<a href="' + item.href + '>' + item.text + '</a>' + 
          '</li>'
      }).join('') + 
    '</ul>'
}

makeListHTML([{
  text: '知行社',
  href: 'http://www.jianshu.com/u/85c9e05fc837'
},{
  text: 'Google',
  href: 'https://google.com'
}])
```


