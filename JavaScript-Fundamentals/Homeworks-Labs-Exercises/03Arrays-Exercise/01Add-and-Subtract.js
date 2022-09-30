function addAndSubtract(input) {
  let resultArr = [];
  let resultSum = 0;

  let inputSum = 0;

  let inputLength = input.length;
  for (let i = 0; i < inputLength; i++) {
    let currentNum = input[i];

    let even = currentNum + i;
    let odd = currentNum - i;

    if (currentNum % 2 === 0) {
      resultArr.push(even);
    } else {
      resultArr.push(odd);
    }
    inputSum += currentNum;
    resultSum += resultArr[i];
  }
  console.log(resultArr);
  console.log(inputSum);
  console.log(resultSum);
}
addAndSubtract([5, 15, 23, 56, 35])