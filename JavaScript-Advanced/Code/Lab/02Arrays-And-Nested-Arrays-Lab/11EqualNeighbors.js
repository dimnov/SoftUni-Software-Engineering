function equalNeighbors(arr) {
  let equalPairs = 0;

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (row < arr.length - 1 && arr[row][col] === arr[row + 1][col]) {
        equalPairs++;
      }

      if (col < arr[row].length - 1 && arr[row][col] === arr[row][col + 1]) {
        equalPairs++;
      }
    }
  }

  console.log(equalPairs);
}
equalNeighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]);