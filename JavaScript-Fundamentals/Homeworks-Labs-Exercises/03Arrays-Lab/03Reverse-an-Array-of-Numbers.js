function reverseArray(n, array) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[n - 1 - i] = array[i];
  }
  console.log(arr.join(' '));
}
reverseArray(3, [10, 20, 30, 40, 50])