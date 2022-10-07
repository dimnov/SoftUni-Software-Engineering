function factorialize(numOne, numTwo) {
  let numOneTotal = 1;
  let numTwoTotal = 1;

  for (let i = 1; i <= numOne; i++) {
    numOneTotal *= i;
  }
  for (let j = 1; j <= numTwo; j++) {
    numTwoTotal *= j;
  }

  let total = numOneTotal / numTwoTotal;
  console.log(total.toFixed(2));
}
factorialize(6, 2);