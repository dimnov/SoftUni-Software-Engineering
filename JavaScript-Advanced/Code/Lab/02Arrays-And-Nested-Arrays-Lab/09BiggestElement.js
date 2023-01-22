function biggestElement(arr) {
  let fullArr = arr.flat();
  fullArr.sort((a, b) => b - a);

  return fullArr[0];
}
biggestElement([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]]);