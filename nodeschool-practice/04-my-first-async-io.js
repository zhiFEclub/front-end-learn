var fs = require('fs')
var filePath = process.argv[2]

fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        return console.log(err)
    }
    console.log(data.split(/\n|\r/).length - 1)
})