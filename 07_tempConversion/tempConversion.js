const convertToCelsius = function(tempInFahrenheit) {
  let celcius = (tempInFahrenheit - 32) * (5 / 9);
  celcius = Number(celcius.toFixed(1));
  return celcius;
};

const convertToFahrenheit = function(tempInCelcius) {
  let fahrenheit = tempInCelcius * (9 / 5) + 32;
  fahrenheit = Number(fahrenheit.toFixed(1));
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
