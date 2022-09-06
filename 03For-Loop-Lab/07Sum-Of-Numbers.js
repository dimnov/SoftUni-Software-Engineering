function solve(input) {
  let number = input[0];
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    let numbers = Number(number[i]);
    sum += numbers;
  }
  console.log(`The sum of the digits is:${sum}`);
}