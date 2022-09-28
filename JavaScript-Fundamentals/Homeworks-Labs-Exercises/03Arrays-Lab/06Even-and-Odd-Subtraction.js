function subtraction(arr) {
  let sum = 0;
  for (let num of arr) {
    let number = Number(num);

    if (number % 2 === 0) {
      sum += number;
    } else {
      sum -= number;
    }
  }
  console.log(sum);
}
subtraction([1, 2, 3, 4, 5, 6])