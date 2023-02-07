// function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
//   let formatter = function (value) {
//     return currencyFormatter(separator, symbol, symbolFirst, value);
//   }

//   return formatter;
// }

function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
  let formatter = function (value) {
    return currencyFormatter(separator, symbol, symbolFirst, value);
  }

  return formatter;
}

function currencyFormatter(separator, symbol, symbolFirst, value) {
  let result = Math.trunc(value) + separator;
  result += value.toFixed(2).substr(-2, 2);
  if (symbolFirst) return symbol + ' ' + result;
  else return result + ' ' + symbol;
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.9929)); // $ 3,99
console.log(dollarFormatter(2.709));  // $ 2,71