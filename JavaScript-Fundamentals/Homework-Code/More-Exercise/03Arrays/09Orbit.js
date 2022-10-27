function orbit(arr) {
  let width = arr[0];
  let height = arr[1];
  let x = arr[2];
  let y = arr[3];

  let matrix = [];

  for (let i = 0; i < width; i++) {
    matrix.push([]);
  }

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
    }
  }
  console.log(matrix.map(row => row.join(' ')).join('\n'));
}
orbit([5, 5, 2, 2]);