function maxNumber(input) {
  let index = 1;
  let inputElement = input[0];
  let maxNumber = Number.MAX_SAFE_INTEGER;

  while (inputElement !== "Stop") {
    let currentNumber = Number(inputElement);

    if (currentNumber < maxNumber) {
      maxNumber = currentNumber;
    }

    inputElement = input[index];
    index++;
  }
  console.log(maxNumber);
}