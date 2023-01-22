function smallestTwoNumbers(arr) {
  let smallestNumbers = arr.sort((a, b) => a - b).slice(0, 2);
  console.log(smallestNumbers.join(' '));
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3])