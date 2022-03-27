const add = function(n1, n2) {
	return n1 + n2
};

const subtract = function(n1, n2) {
	return n1 - n2
};

const sum = function(arr) {
	return arr.reduce((sum, num) => sum += num, 0)
};

const multiply = function(arr) {
  return arr.reduce((prod, num) => prod *= num, 1)
};

const power = function(n1, n2) {
	return Math.pow(n1, n2)
};

const factorial = function(n) {
  if (n < 0){
    return undefined
  } else if (n === 0){
    return 1
  } else{
    return n * factorial(n - 1)
  }
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
