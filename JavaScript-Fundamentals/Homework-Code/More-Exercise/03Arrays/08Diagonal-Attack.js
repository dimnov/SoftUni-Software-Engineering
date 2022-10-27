function diagonalAttack(arr) {
  let matrix = arr.map(row => row.split(' ').map(Number));
  let matrixLength = matrix.length;
  let sumFirst = 0;
  let sumSecond = 0;

  for (let i = 0; i < matrixLength; i++) {
    sumFirst += matrix[i][i];
  }

  for (let j = 0; j < matrixLength; j++) {
    sumSecond += matrix[j][(matrixLength - 1) - j];
  }

  if (sumFirst === sumSecond) {
    for (let k = 0; k < matrixLength; k++) {
      for (let l = 0; l < matrixLength; l++) {
        if (k != l && k != (matrixLength - 1) - l) {
          matrix[k][l] = sumFirst;
        }
      }
    }
    numbers(matrix);
  }
  else {
    numbers(matrix);
  }

  function numbers(matrix) {
    for (let i = 0; i < matrixLength; i++) {
      console.log(matrix[i].join(' '));
    }
  }
}
diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1'])