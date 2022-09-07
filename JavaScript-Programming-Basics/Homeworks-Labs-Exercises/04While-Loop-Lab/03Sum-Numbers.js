function sumNumbers(input) {
  let index = 1;

  let number = Number(input[0]);
  let sum = 0;
  let currentNumber = Number(input[index]);

  while (sum < number) {
    sum += Number(currentNumber);
    index++;
    currentNumber = input[index];
  }
  console.log(sum);
}