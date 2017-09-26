var inputs = process.argv.slice(2);
var result = inputs
  .map(item => item.charAt(0))
  .reduce((prev, curr) => {
    return prev + curr
  }, '')

console.log(`[${inputs}] becomes "${result}"`)