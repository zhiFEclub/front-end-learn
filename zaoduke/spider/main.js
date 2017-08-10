var nodejieba = require("nodejieba")


nodejieba.load({
  stopWordDict: './stop_words.utf8', // 停用词典。不进入关键字统计。默认停用词典 https://github.com/yanyiwu/nodejieba/blob/master/dict/stop_words.utf8
});
var request = require('request')

const LIMIT = 50
var url =  `https://timeline-merger-ms.juejin.im/v1/get_entry_by_timeline?src=web&limit=${LIMIT}&type=post&category=5562b415e4b00c57d9b94ac8`
request({
  url,
  // encoding: null
}, (error, response, body) => {
  if (!error && response.statusCode == 200) {
    var list = JSON.parse(body).d.entrylist.map(item=> {
      return {
        title: item.title,
        // content, // 概要
        // updatedAt,
        // originalUrl,
      }
    })
    console.log(list)

    //关键词提取
    // var topN = 5
    // var res = nodejieba.extract(mainContent, topN);
    // console.log(res.map(item => {
    //   return item.word
    // }).join()) // [CSS,JavaScript,示例,写法,js]
  }
})

