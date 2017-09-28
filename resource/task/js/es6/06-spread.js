var numbers = process.argv.slice(2)
var res = Math.min(...numbers)

console.log(`The minimum of [${numbers}] is ${res}`)