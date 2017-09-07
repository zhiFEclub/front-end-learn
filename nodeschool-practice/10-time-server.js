var net = require('net')
var port = process.argv[2]

var server = net.createServer(function(socket) {
  socket.write(getCurrentTimeStr())
  socket.write('\n')
  socket.end()
})
server.listen(port)

function getCurrentTimeStr() {
  var now = new Date()
  var year = now.getFullYear()
  var month = fillZero(now.getMonth() + 1)
  var date = fillZero(now.getDate())
  var hour = fillZero(now.getHours())
  var minute = fillZero(now.getMinutes())
  return [year, month, date].join('-') + ' ' + [hour, minute].join(':')
}

function fillZero(value) {
  return value < 10 ? ('0' + value) : value
}

