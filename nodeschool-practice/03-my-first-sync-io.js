var fs = require('fs')
var filePath = process.argv[2]

var contents = fs.readFileSync(filePath, 'utf-8').toString()
// 明明是不需要 - 1 的。发现只有-1后才能过。。。
console.log(contents.split(/\n|\r/).length - 1)
