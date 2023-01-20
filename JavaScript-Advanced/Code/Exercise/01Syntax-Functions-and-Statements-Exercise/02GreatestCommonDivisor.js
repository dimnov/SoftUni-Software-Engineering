function solve(numOne, numTwo) {
  let result;

  while (numTwo !== 0) {
    result = numTwo;
    numTwo = numOne % numTwo;
    numOne = result;
  }

  console.log(result);
}
solve(2154, 458)