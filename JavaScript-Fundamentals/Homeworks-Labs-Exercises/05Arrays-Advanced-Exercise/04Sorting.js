function sorting(arr) {
  arr = arr.sort((a, b) => a - b);
  let resultArray = [];

  while (arr.length !== 0) {
    resultArray.push(arr.pop());
    resultArray.push(arr.shift());
  }

  console.log(resultArray.join(' '));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])