var port = process.argv[2]
var filePath = process.argv[3]
var fs = require('fs')

var http = require('http')
var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })
  fs.createReadStream(filePath).pipe(res)
  // 下面的写法代码虽然能实现，但比较搓，呵呵
  // fs.createReadStream(filePath).addListener("data", function(chunk) {
  //   res.write(chunk, 'binary');
  // }).addListener("close", function() {
  //   res.end();
  // })
})
server.listen(port)