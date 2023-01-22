function biggerHalf(arr) {
  let arrLength = arr.length;
  arr.sort((a, b) => a - b);

  let biggerHalf = Math.floor(arrLength / 2);
  let result = [];

  for (let i = biggerHalf; i < arrLength; i++) {
    result.push(arr[i]);
  }
  return result;
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);