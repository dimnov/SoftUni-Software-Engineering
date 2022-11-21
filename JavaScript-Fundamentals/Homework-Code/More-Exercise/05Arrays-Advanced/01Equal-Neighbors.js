function equalNeighbors(input) {
  let counter = 0;

  let inputLength = input.length;

  for (let i = 0; i < inputLength; i++) {
    let row = input[i];

    for (let j = 0; j < row.length; j++) {
      let col = row[j];

      if (i !== inputLength - 1) {
        if (col == row[j + 1]) {
          counter++;
        }

        if (col == input[i + 1][j]) {
          counter++;
        }
      } else if (col == row[j + 1] || col == input[i][j + 1]) {
        counter++;
      }
    }
  }

  console.log(counter);
}
equalNeighbors([['2', '2', '5', '7', '4'],
['4', '0', '5', '3', '4'],
['2', '5', '5', '4', '2']]);