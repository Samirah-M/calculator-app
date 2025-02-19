// Import the calculator functions from the calculator.js file
const { add, subtract, multiply, divide } = require('./calculator.js');

// Test the calculator functions
console.log(add(2, 3)); 
console.log(subtract(5, 2)); 
console.log(multiply(4, 5)); 
console.log(divide(10, 2)); 

// Test the divide function with a zero divisor
try {
  // Attempt to divide by zero
  console.log(divide(10, 0));
} catch (error) {
  // Catch and log the error
  console.error(error.message); 
}