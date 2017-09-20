// api-tool add 新增
// api-tool 显示全部。生成 html，打开？
// api-tool search xxx ：搜索
// 参数那块是不是用 table 来写更好？
var fs = require('fs')
var marked = require('marked')

var filePath = './api.md'

var text = fs.readFileSync(filePath, 'utf-8').toString()


var lexer = new marked.Lexer();
var tokens = lexer.lex(text);
// console.log(tokens);
console.log(toJSON(tokens))
// toJSON(tokens)

/*
{
  name: 'api 文档',
  apis: [{
    name: 
    path,
    method,
    params: [{
      
    }, ...]
    res: ''
  }]
}
*/
function toJSON(tokens) {
  var res = {
    apis: []
  }
  var apiStartIndex = null

  var currParam = null
  tokens.forEach((token, i) => {
    if (token.depth === 1 && token.type === 'heading') {
      res.name = token.text
    } else if(token.depth === 2 && token.type === 'heading') {
      if(apiStartIndex) {
        res.apis.push(parseAPIItem(tokens.slice(apiStartIndex, i)))
      } 
      apiStartIndex = i
    }
  })
  // 最后一条
  res.apis.push(parseAPIItem(tokens.slice(apiStartIndex)))
  return res
}

function parseAPIItem(tokens) {
  var res = {
    method: 'GET'
  }
  var preItemIndex = null
  var lastH3TokenName  = null
  tokens.forEach((token, i) => {
    if(token.depth === 2 && token.type === 'heading') {
      res.name = token.text
    } else if(token.depth === 3 && token.type === 'heading') {
      if (preItemIndex !== null) {
        let item = parseAPIInnner(lastH3TokenName, tokens.slice(preItemIndex, i))
        res[item.key] = item.value
      }
      preItemIndex = i
      lastH3TokenName = token.text
    }
  })
  // if()
  let item = parseAPIInnner(lastH3TokenName, tokens.slice(preItemIndex))
  res[item.key] = item.value
  // console.log(res)
  return res
}

function parseAPIInnner(name, tokens) {
  var res = {
    key: null,
    value: null
  }
  if(!name) {
    return {
      key: 'xx',
      value: tokens
    }
  }
  // console.log(name)
  if(name.indexOf('路径') !== -1) {
    res.key = 'path'
  }
  else if(name.indexOf('方法') !== -1) {
    res.key = 'method'
  }
  else if(name.indexOf('参数') !== -1) {
    res.key = 'params'
  }
  else if(name.indexOf('响应') !== -1) {
    res.key = 'res'
  }

  var texts = tokens
    .filter(item => item.type === 'code' || item.type === 'paragraph' || item.type === 'text')
    
  texts = texts.map((item, i) => {
      var text = item.text.trim()
      if(name === 'method') {
        text = text.toUpperCase()
      }
      // console.log(item.type + ':' + text)
      if(i !== texts.length - 1 && (item => item.type === 'code' || item.type === 'paragraph')) {
        text += '\n\n'
      }
      return text
    })

  res.value = texts.join('')
  return res
}


