function simpleCalculator(numOne, numTwo, operator) {
  let total = 0;
  switch (operator) {
    case "multiply":
      total = numOne * numTwo;
      break;
    case "divide":
      total = numOne / numTwo;
      break;
    case "add":
      total = numOne + numTwo;
      break;
    case "subtract":
      total = numOne - numTwo;
      break;
  }
  console.log(total);
}
simpleCalculator(40, 8, 'divide')