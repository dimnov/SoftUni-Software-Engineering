function bunnyKill(input) {
  let bombCells = input.pop().split(' ').map(x => x.split(',').map(x => Number(x)));
  let matrix = input.map(row => row.split(' ').map(x => Number(x)));

  let damage = 0;
  let kills = 0;

  let bombCellsLength = bombCells.length;

  for (let i = 0; i < bombCellsLength; i++) {
    let row = bombCells[i][0];
    let column = bombCells[i][1];
    let value = matrix[row][column];

    if (value <= 0) {
      continue;
    }

    let startRow = Math.max(0, row - 1);
    let endRow = Math.min(row + 1, input.length - 1);

    for (row = startRow; row <= endRow; row++) {
      let startCol = Math.max(0, column - 1);
      let endCol = Math.min(column + 1, input[row].length - 1);

      for (col = startCol; col <= endCol; col++) {
        matrix[row][col] -= value;
      }
    }

    kills++;
    damage += value;
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > 0) {
        damage += matrix[row][col];
        kills++;
      }
    }
  }

  console.log(damage);
  console.log(kills);
}
bunnyKill(['10 10 10',
  '10 10 10',
  '10 10 10',
  '0,0']);