function magicMatrices(arr) {
  let sum = arr[0].reduce((sum, x) => sum + x);

  for (let rows = 0; rows < arr.length; rows++) {
    let rowsSum = 0;
    let columnsSum = 0;

    for (let columns = 0; columns < arr[rows].length; columns++) {
      if (columns < arr.length) {
        rowsSum += arr[columns][rows];
      }
      columnsSum += arr[rows][columns];
    }

    if (rowsSum != sum || columnsSum != sum) {
      return false;
    }
  }
  return true;
}
console.log(magicMatrices([[4, 5, 6], [6, 5, 4], [5, 5, 5]]));