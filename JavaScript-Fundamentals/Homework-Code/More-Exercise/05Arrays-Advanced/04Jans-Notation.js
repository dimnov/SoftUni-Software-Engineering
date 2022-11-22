function jansNotation(input) {
  let numbersArray = [];

  for (let i = 0; i < input.length; i++) {

    if (Number(input[i])) {
      numbersArray.push(Number(input[i]));
    }
    else {
      sum(numbersArray, input[i]);
    }
  }

  if (numbersArray.length >= 2) {
    console.log('Error: too many operands!')
  } else if (numbersArray.length === 1) {
    console.log(numbersArray.toString());
  }

  function sum(numbers, operator) {

    if (numbers.length === 1) {
      console.log('Error: not enough operands!');
    }

    switch (operator) {
      case '+':
        numbers[numbers.length - 2] = numbers[numbers.length - 2] + numbers[numbers.length - 1];
        numbers.splice(- 1, 1);
        break;

      case '-':
        numbers[numbers.length - 2] = numbers[numbers.length - 2] - numbers[numbers.length - 1];
        numbers.splice(- 1, 1);
        break;

      case '*':
        numbers[numbers.length - 2] = numbers[numbers.length - 2] * numbers[numbers.length - 1];
        numbers.splice(- 1, 1);
        break;

      case '/':
        numbers[numbers.length - 2] = numbers[numbers.length - 2] / numbers[numbers.length - 1];
        numbers.splice(- 1, 1);
        break;
    }
  }
}
jansNotation([3,
  4,
  '+']);