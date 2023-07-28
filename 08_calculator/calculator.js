const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

//  This should sum up the numbers in the array
const sum = function(a) {
  const sum = a.reduce((a, b) => a + b, 0);
  return sum;
};

const multiply = function(...args) {
  return args.reduce((a, b) => a * b, 1);
};

const power = function(a, b) {
  return a ** b;
};

// The factorial function (symbol: !) says to multiply all whole numbers from our chosen number down to 1.
const factorial = function(n) {
  return n < 2 ? 1 : n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
