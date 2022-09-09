function trapeziodArea(input) {
  let base1 = Number(input[0]);
  let base2 = Number(input[1]);
  let height = Number(input[2]);
  let result = ((base1 + base2) * height) / 2;
  console.log(result.toFixed(2));
}