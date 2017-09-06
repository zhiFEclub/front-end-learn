var http = require('http')
var url = process.argv[2]

http.get(url, res => {
  res.setEncoding('utf8')
  var data = ''
  res.on('data', chunk => {
    data += chunk
  })
  res.on('end', () => {
    console.log(data.length)
    console.log(data)
  })
  res.on('error', () => {})
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
})