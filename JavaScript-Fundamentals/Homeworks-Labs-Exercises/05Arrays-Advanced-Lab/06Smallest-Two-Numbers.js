function smallestTwoNumbers(arr) {
  let sortedNumbers = arr.sort((a, b) => { return a - b; });
  console.log(sortedNumbers.slice(0, 2).join(' '));
}
smallestTwoNumbers([30, 15, 50, 5])