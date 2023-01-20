function sameNumbers(number) {
  let numberStr = number.toString();
  let sum = 0;
  let isSame = true;
  let firstChar = numberStr[0];

  for (let i = 0; i < numberStr.length; i++) {
    if (firstChar !== numberStr[i]) {
      isSame = false;
    }
    sum += Number(numberStr[i]);
  }
  console.log(isSame);
  console.log(sum);
}
sameNumbers(2222222)
sameNumbers(1234)
