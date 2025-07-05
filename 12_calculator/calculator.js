const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce( (cur, next) => cur + next, 0);
};

const multiply = function(array) {
  return array.reduce( (cur, next) => cur *= next, 1);
};

const power = function(a,b) {
  let acc = 1;
	for(let i=0; i<b; i++) acc *= a;
  return acc;
};

const factorial = function(a) {
	let acc = 1;
  for(let i=a; i>0; i--) acc *= i;
  return acc;
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
