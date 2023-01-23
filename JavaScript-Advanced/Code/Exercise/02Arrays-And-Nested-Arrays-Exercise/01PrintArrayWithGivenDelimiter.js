function printArr(arr, joinStr) {
  let result = arr.join(joinStr);

  return result;
}
printArr(['One',
  'Two',
  'Three',
  'Four',
  'Five'],
  '-');