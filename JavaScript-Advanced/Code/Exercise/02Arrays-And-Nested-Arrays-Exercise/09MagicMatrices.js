function matrixMatrices(matrix) {
  let sumRows = 0;
  let sumCols = 0;

  for (let i = 0; i < matrix.length; i++) {
    let currentArr = matrix[i].join('');
    for (let j = 0; j < currentArr.length; j++) {
      sumRows += Number(currentArr[j]);
      sumCols += Number(currentArr[0]);
    }
  }
  if (sumRows === sumCols) {
    console.log(true);
  } else {
    console.log(false);
  }
}
matrixMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);