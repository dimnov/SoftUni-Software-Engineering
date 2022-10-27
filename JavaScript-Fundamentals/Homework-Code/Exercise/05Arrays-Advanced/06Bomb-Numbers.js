function bombNumbers(arr, specialNum) {
  let sum = 0;
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let current = arr[i];

    if (current === specialNum[0]) {
      let start = Math.max(0, i - specialNum[1]);
      let countToEnd = (specialNum[1] * 2) + 1;

      arr.splice(start, countToEnd);
      i = i - specialNum[1] - 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    sum += current;
  }
  console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
  [4, 2]
);