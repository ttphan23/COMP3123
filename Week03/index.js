
const http = require('http'); // built-in module
const os = require('os'); // built-in module

const arithmetic = require('./modules/arithmetic'); // local module
// const { add, subtract } = arithmetic; // destructuring assignment
//const { add, subtract } = require('./modules/arithmetic'); // destructuring assignment
const greet = require('./modules/greet.js'); // local module

// console.log(http)

//Global Object
// console.log(global)
// console.log(console)
// console.log(__dirname) // current directory
// console.log(__filename) // current file

// console.log(module) // current module
// console.log(module.exports) // what is exported from the current module


console.log(arithmetic)
console.log(greet)
console.log(arithmetic.add(5, 3)) // 8
console.log(arithmetic.subtract(5, 3)) // 2
console.log(arithmetic.multiply(5, 3)) // 15
console.log(arithmetic.divide(6, 3)) // 2
// console.log(arithmetic.divide(6, 0)) // Error: Cannot divide by zero
