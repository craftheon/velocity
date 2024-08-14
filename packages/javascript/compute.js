/**
 * input 1 + 2, output 3
 * input 1 + 2 * 3, output 7
 * input 1 * 2 + 3, output 5
 * input (1 + 2) / 3, output 1
 */

var compute = function(input) {
  let inputArrify = input.split('').filter(e => e !== ' ')
  console.log(inputArrify)
}

console.log(compute("1+2"))
console.log(compute("1*2+3"))
console.log(compute("1+20*3"))
