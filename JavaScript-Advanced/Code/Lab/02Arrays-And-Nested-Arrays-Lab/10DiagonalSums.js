function diagonalSums(arr) {
  let main = 0;
  let secondary = 0;

  for (let i = 0; i < arr.length; i++) {
    main += arr[i][i];
    secondary += arr[i][arr.length - i - 1];
  }
  console.log(main, secondary);
}
diagonalSums([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);