// Import the calculator functions from the calculator.js file
const { add, subtract, multiply, divide } = require('../calculator.js');

// Describe the calculator test suite
describe('calculator', () => {
  // Test case: Add two numbers
  it('adds two numbers', () => {
    // Verify that the add function returns the correct result
    expect(add(2, 3)).toBe(5);
  });

  // Test case: Subtract two numbers
  it('subtracts two numbers', () => {
    // Verify that the subtract function returns the correct result
    expect(subtract(5, 2)).toBe(3);
  });

  // Test case: Multiply two numbers
  it('multiplies two numbers', () => {
    // Verify that the multiply function returns the correct result
    expect(multiply(4, 5)).toBe(20);
  });

  // Test case: Divide two numbers
  it('divides two numbers', () => {
    // Verify that the divide function returns the correct result
    expect(divide(10, 2)).toBe(5);
  });

  // Test case: Divide by zero error handling
  it('throws an error when dividing by zero', () => {
    // Verify that the divide function throws an error when dividing by zero
    expect(() => divide(10, 0)).toThrowError('Cannot divide by zero');
  });
});