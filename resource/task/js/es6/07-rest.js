module.exports = function average(...nums) {
  var len = nums.length
  var sum = nums.reduce((prev, curr) => {
    return prev + curr
  }, 0)
  return sum / len
}