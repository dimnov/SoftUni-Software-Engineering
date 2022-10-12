function processOddNumbers(arr) {
  let array = [];
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    if ((i + 2) % 2 == 1) {
      arr[i] *= 2;
      array.unshift(arr[i]);
    }
  }
  console.log(array.join(' '));
}
processOddNumbers([3, 0, 10, 4, 7, 3])