var port = process.argv[2]
var fs = require('fs')
var url = require('url')

var http = require('http')
var server = http.createServer(function(req, res) {
  var urlObj = url.parse(req.url, true)
  var path = urlObj.path
  var date = new Date(urlObj.query.iso)
  var result = null

  if(req.method === 'GET') {
    if(path.indexOf('/api/parsetime') === 0) {
      result = JSON.stringify({
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
      })
    } else if(path.indexOf('/api/unixtime') === 0) {
      result = JSON.stringify({
        unixtime: date.getTime()
      })
    } else {
      result = path
    }
  }
  if(result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })  
    res.write(result)
  } else {
    res.writeHead(404)
  }
  res.end()
})

server.listen(port)