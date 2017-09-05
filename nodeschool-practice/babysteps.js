var args = process.argv.slice(2) // 下标从2开始才是我们要的内容。

var sum = args.reduce((prev, curr) => {
  return prev + parseFloat(curr)
}, 0)

console.log(sum)

// 官方解答如下
// var result = 0

// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)

