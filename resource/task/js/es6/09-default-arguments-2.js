module.exports = (str, markNum = str.length) => {
  var res = []
  // "!".repeat(markNum)
  for(let i = 0; i < markNum; i++) {
    res.push('!')
  }
  return str + res.join('')
}