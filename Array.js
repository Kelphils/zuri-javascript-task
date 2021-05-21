
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
      // console.log(i, divChecker)
      finalArray.push(finValue);
    }
    return finalArray

}
let result = checkYuGiOh('30');
console.log(result)

