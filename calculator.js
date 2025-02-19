// Function to add two numbers
function add(a, b) {
    return a + b;
 }
 
 // Function to subtract the second number from the first
 function subtract(a, b) {
   return a - b;
 }
 
 // Function to multiply two numbers
 function multiply(a, b) {
   return a * b;
 }
 
 // Function to divide the first number by the second
 // Throws an error if attempting to divide by zero
 function divide(a, b) {
   if (b === 0) {
     throw new Error('Cannot divide by zero');
   }
   return a / b;
 }
 
 // Exporting all functions to be used in other files
 module.exports = { add, subtract, multiply, divide };
 