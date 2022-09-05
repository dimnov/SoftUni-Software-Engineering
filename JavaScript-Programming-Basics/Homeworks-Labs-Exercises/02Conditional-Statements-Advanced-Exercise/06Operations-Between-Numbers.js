function operationsBetweenNumbers(input) {
  let numberOne = Number(input[0]);
  let numberTwo = Number(input[1]);
  let operator = input[2];

  let result = 0;
  let test;

  switch (operator) {
    case "+":
      result = numberOne + numberTwo;
      if (result % 2 === 0) {
        test = "even"
      } else {
        test = "odd"
      }
      console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - ${test}`);
      break;
    case "-":
      result = numberOne - numberTwo;
      if (result % 2 === 0) {
        test = "even"
      } else {
        test = "odd"
      }
      console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - ${test}`);
      break;
    case "*":
      result = numberOne * numberTwo;
      if (result % 2 === 0) {
        test = "even"
      } else {
        test = "odd"
      }
      console.log(`${numberOne} ${operator} ${numberTwo} = ${result} - ${test}`);
      break;
    case "/":
      result = numberOne / numberTwo;
      if (numberTwo === 0) {
        console.log(`Cannot divide ${numberOne} by zero`);
      } else {
        if (result % 2 === 0) {
          test = "even"
        } else {
          test = "odd"
        }
        console.log(`${numberOne} / ${numberTwo} = ${result.toFixed(2)}`);
      }
      break;
    case "%":
      result = numberOne % numberTwo;
      if (numberTwo === 0) {
        console.log(`Cannot divide ${numberOne} by zero`);
      } else {
        if (result % 2 === 0) {
          test = "even"
        } else {
          test = "odd"
        }
        console.log(`${numberOne} % ${numberTwo} = ${result}`);
      }
      break;
  }
}