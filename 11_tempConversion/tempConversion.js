const convertToCelsius = function(fah) {
  converted = (fah - 32) * 5 / 9;
  return Math.round(10*converted) / 10;
};

const convertToFahrenheit = function(cel) {
  converted = (cel * 9 / 5) + 32
  return Math.round(10*converted) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
