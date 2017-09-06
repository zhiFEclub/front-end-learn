var http = require('http')
var url = process.argv[2]

http.get(url, res => {
  res.setEncoding('utf8')
  res.on('data', chunk => {
    console.log(chunk)
  })
  res.on('end', () => {})
  res.on('error', () => {})
}).on('error', (e) => {
  console.error(`Got error: ${e.message}`);
})