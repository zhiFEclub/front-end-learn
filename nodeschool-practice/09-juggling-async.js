var http = require('http')
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

fetch(url1).then(data =>{
  console.log(data)
  return fetch(url2)
}).then(data =>{
  console.log(data)
  return fetch(url3)
}).then(data => {
  console.log(data)
})

function fetch(url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      res.setEncoding('utf8')
      var data = ''
      res.on('data', chunk => {
        data += chunk
      })
      res.on('end', () => {
        resolve(data)
      })
      res.on('error', err => {
        reject(err)
      })
    }).on('error', err => {
        reject(err)
    })
  })
}
