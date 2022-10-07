function oddAndEvenSum(number) {
  let numString = number.toString();

  let odd = 0;
  let even = 0;

  let numStringLength = numString.length;
  for (let i = 0; i < numStringLength; i++) {
    let currentNum = Number(numString[i]);

    if (currentNum % 2 === 0) {
      even += currentNum;
    } else {
      odd += currentNum;
    }
  }
  console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
oddAndEvenSum(1000435)