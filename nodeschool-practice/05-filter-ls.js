var fs = require('fs')
var foldPath = process.argv[2]
var fileExt = process.argv[3]

fs.readdir(foldPath, 'utf-8', (err, fileNames) => {
    if (err) {
        return console.log(err)
    }
    var reg = new RegExp(`\.${fileExt}$`)
    fileNames.forEach(name => {
      if(reg.test(name)) {
        console.log(name)
      }
      return 
    })

})

/*
* 后缀名也可以用 
* path.extname(name)
*/