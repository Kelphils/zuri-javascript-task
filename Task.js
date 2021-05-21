// First Task
function convertFahrToCelsius (fahrenheit) {
    if (Array.isArray(fahrenheit)) {
      return `${fahrenheit}  is not a valid number but a/an array.` ;
    } else if (typeof(fahrenheit) === 'string' && isNaN(fahrenheit)) {
      return`${fahrenheit}  is not a valid number but a/an ${typeof fahrenheit}.`;
    } else if (typeof(fahrenheit) === 'object') {
      return `${fahrenheit}  is not a valid number but a/an ${typeof fahrenheit}.`;
    }
    let C = (fahrenheit - 32) * 5 / 9;
    return C.toFixed(4)
} 

// Second Task

function checkYuGiOh(n){
    if (isNaN(n)) {
     return `invalid parameter: "${n}"`
    }
    var finalArray = [];
    for  (var i = 1; i <= n; i++) {
      let finValue = i
      let divChecker = [] 
      if (i % 2 === 0) {
        divChecker.push('yu')
      }
      if (i % 3 === 0) {
        divChecker.push('gi')
      }
      if (i % 5 === 0) {
        divChecker.push('oh')
      }
      if (divChecker.length > 0) {
        finValue = divChecker.join('-')
      }
      finalArray.push(finValue);
    }
    return finalArray
}