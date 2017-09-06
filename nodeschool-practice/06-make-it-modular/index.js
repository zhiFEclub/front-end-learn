var filterLS = require('./filter-ls')
var foldPath = process.argv[2]
var fileExt = process.argv[3]

filterLS(foldPath, fileExt, (err, fileNames) => {
  if(err) {
    return console.error(err)
  }
  fileNames.forEach(name => {
    console.log(name)
  })
})
