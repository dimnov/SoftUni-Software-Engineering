function sumDigits(input) {
  let string = input.toString();
  let sum = 0;
  let numOfDigits = string.length;

  for (let i = 0; i < numOfDigits; i++) {
    let currentDigit = Number(string[i]);
    sum += currentDigit;
  }
  console.log(sum);
}
sumDigits(10)