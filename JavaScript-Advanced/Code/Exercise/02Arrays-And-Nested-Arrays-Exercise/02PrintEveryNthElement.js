function printEveryNthElement(arr, nth) {
  return arr.filter((el, index) => index % nth == 0);
}
printEveryNthElement(['5',
  '20',
  '31',
  '4',
  '20'],
  2);