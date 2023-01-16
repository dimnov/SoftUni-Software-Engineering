function aggregateElements(arr) {
  let sum = arr.reduce((numOne, numTwo) => numOne + numTwo, 0);
  let inverse = arr.reduce((numOne, numTwo) => numOne + (1 / numTwo), 0);
  let concat = arr.reduce((numOne, numTwo) => numOne + numTwo.toString(), "");

  console.log(sum);
  console.log(inverse);
  console.log(concat);
}
aggregateElements([2, 4, 8, 16]);