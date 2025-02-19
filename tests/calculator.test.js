const { add, subtract, multiply, divide } = require ('../calculator.js');

describe('calculator', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('subtracts two numbers', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  it('multiplies two numbers', () => {
    expect(multiply(4, 5)).toBe(20);
  });

  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  it('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrowError('Cannot divide by zero');
  });
});
