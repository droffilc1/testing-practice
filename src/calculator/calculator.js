const add = function(a, b) {
	return a + b;
};

add(2, 2);

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.length ? array.reduce((accumulator, nextItem) => accumulator * nextItem) : 0;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	if(num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    return(num * factorial(num -1));
  }
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
