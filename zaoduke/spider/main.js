var nodejieba = require("nodejieba")
var moment = require('moment')

// 不规则的拼写标准化
var standardWords = {
  'html': 'HTML',
  'Html': 'HTML',
  'css': 'CSS',
  'js': 'JavaScript',
  'JS': 'JavaScript',
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


nodejieba.load({
  userDict: './userdict.utf8', // 专用词典
  stopWordDict: './stop_words.utf8', // 停用词典。不进入关键字统计。默认停用词典 https://github.com/yanyiwu/nodejieba/blob/master/dict/stop_words.utf8
});
var request = require('request')

const KEYWORDS_NUM = 1 // 从每篇文章的标题提取关键字数量
const LIMIT = 50 // 50篇文章
var url = `https://timeline-merger-ms.juejin.im/v1/get_entry_by_timeline?src=web&limit=${LIMIT}&type=post&category=5562b415e4b00c57d9b94ac8`
request({
  url,
  // encoding: null
}, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    var today = moment()
    var yesterday = moment().subtract(1, 'days')
    // 如果是上午，拿昨天的，否则拿今天的
    // var useToday = today.hour() > 12
    var useToday = true
    var target = useToday ? today : yesterday

    var resObj = {}
    var list = JSON.parse(body).d.entrylist
      .filter(item => {
        return moment(item.updatedAt).isSame(target, 'days')
      })
      .forEach(item => {
        var keywords = standard(nodejieba.extract(item.title, KEYWORDS_NUM))
        var resItem = {
          title: item.title,
          content: item.content, // 开始内容
          updatedAt: item.updatedAt,
          originalUrl: item.originalUrl,
        }
        keywords.forEach(keyword => {
          if(!resObj[keyword]) {
            resObj[keyword] = []
          }
          // Object.assign()
          resObj[keyword].push(resItem)
        })
      })
    var resArr = []
    for(var keyword in resObj) {
      let keywordArticles = resObj[keyword]
      resArr.push({
        keyword: keyword,
        num: keywordArticles.length,
        list: keywordArticles
      })
    }
    resArr.sort((a,b) => {
      return b.num - a.num
    })
    // console.log(resArr[0].list)
    // return
    var fs = require('fs');
      fs.writeFile(target.format('YYYY-MM-DD') + ".md", outputMD(resArr, useToday), function(e){
      if(e) throw e;
      console.log('完成！')
    })
    
  }

})
// 输出 Markdown 格式的文章
function outputMD(keywordArticles, useToday) {
  var title = '抓取' + (useToday ? '今天' : '昨天') + '在[掘金网](https://juejin.im/)上最新发布的50篇前端文章，概要：'
  var summary =  title + keywordArticles.map(item => {
    return item.keyword + '(' + item.num + '篇)'
  }).join() + '。'

  var res = keywordArticles.map(item => {
    var res = '## 标签：' + item.keyword + '\n'
    var list = item.list
    res = res + list.map(item => {
      return [
        '### ' + item.title,
        // '创建时间: ' + moment(item.updatedAt).format('YYYY-MM-DD HH:mm:ss'),
        '> ' + item.content + '\n', 
        '阅读地址: ' + item.originalUrl,
      ].join('\n')
    }).join('\n\n')
    return res
  }).join('\n\n')
  // console.log(res)
  return [summary, '详情如下：', res].join('\n\n')
}

function standard(words) {
  return words.map(item => {
    return standardWords[item.word] || item.word
  })
}

