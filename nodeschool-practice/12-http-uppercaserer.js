var port = process.argv[2]
var fs = require('fs')

var http = require('http')
var server = http.createServer(function(req, res) {
  if(req.method === 'POST') {
    var body = ''
    req.on('data', function(chunk) {
      body += chunk
    })
    req.on('end', function() {
      var data = body.toUpperCase()
      res.write(data)
    })
  }
  
})
server.listen(port)


// 用流的方式写比较优雅
// var http = require('http')
// var map = require('through2-map')

// var server = http.createServer(function (req, res) {
//   if (req.method !== 'POST') {
//     return res.end('send me a POST\n')
//   }

//   req.pipe(map(function (chunk) {
//     return chunk.toString().toUpperCase()
//   })).pipe(res)
// })

// server.listen(Number(process.argv[2]))