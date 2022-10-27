function addAndSubtract(numOne, numTwo, numThree) {

  function sum(numOne, numTwo) {
    let sumNumbers = numOne + numTwo;
    return sumNumbers;
  }
  let sumStep = sum(numOne, numTwo);

  function subtract(numThree) {
    let total = sumStep - numThree;
    return total;
  }
  let subtractStep = subtract(numThree);

  console.log(subtractStep);
}
addAndSubtract(51, 49, 100)