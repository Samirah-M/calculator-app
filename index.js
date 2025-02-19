const { add, subtract, multiply, divide } = require ('./calculator.js');

console.log(add(2, 3)); 
console.log(subtract(5, 2)); 
console.log(multiply(4, 5)); 
console.log(divide(10, 2)); 

try {
  console.log(divide(10, 0)); 
} catch (error) {
  console.error(error.message); 
}
