var fs = require('fs')


module.exports = (foldPath, fileExt, cb) => {
  fs.readdir(foldPath, 'utf-8', (err, fileNames) => {
      if(err) {
        return cb(err)
      }
      var reg = new RegExp(`\.${fileExt}$`)
      cb(null, fileNames.filter(name => reg.test(name)))
  })
}

/*
* 后缀名也可以用 
* path.extname(name)
*/