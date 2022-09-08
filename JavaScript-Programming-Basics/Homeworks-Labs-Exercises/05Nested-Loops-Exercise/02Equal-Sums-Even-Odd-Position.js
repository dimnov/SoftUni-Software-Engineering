function EqualSumsEvenOddPosition(input) {

  let numOne = Number(input[0]);
  let numTwo = Number(input[1]);

  let printLine = '';

  for (let i = numOne; i <= numTwo; i++) {
    let currentNum = "" + i;
    let oddSum = 0;
    let evenSum = 0;

    for (let n = 0; n < currentNum.length; n++) {
      let currentDigit = Number(currentNum.charAt(n));

      if (n % 2 === 0) {
        evenSum += currentDigit;
      } else {
        oddSum += currentDigit;
      }
    }
    if (oddSum === evenSum) {
      printLine += `${i} `;
    }
  }
  console.log(printLine);
}