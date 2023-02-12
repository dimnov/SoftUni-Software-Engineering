function subSum(array, startIndex, endIndex) {
  if (!Array.isArray(array)) return NaN;

  startIndex = Math.max(startIndex, 0);
  endIndex = Math.min(endIndex, array.length - 1);

  return array
    .slice(startIndex, endIndex + 1)
    .map(Number)
    .reduce((acc, x) => acc + x, 0);
  // let sum = 0;
  // for (let i = startIndex; i <= endIndex; i++) {
  //   sum += Number(array[i]);
  // }
  // console.log(sum);
  // return sum;
}
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);