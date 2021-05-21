 function convertFahrToCelsius (fahrenheit) {
  if (Array.isArray(fahrenheit)) {
    return `${fahrenheit}  is not a valid number but a/an array.` ;
  } else if (typeof(fahrenheit) === 'string' && isNaN(fahrenheit)) {
    return`${fahrenheit}  is not a valid number but a/an ${typeof fahrenheit}.`;
  } else if (typeof(fahrenheit) === 'object') {
    return `${fahrenheit}  is not a valid number but a/an ${typeof fahrenheit}.`;
  }
  var F = fahrenheit;
  var C = (F - 32) * 5 / 9;
  var message = (F+'\xB0F is ' + C.toFixed(2) + '\xB0C.');
  console.log(message);
} 
let result = convertFahrToCelsius(0)
console.log(result)