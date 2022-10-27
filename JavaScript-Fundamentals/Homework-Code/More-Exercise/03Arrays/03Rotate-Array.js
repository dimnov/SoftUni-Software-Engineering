function rotateArray(arr) {
  let n = arr.pop();

  for (let i = 0; i < n; i++) {
    let current = arr.pop();
    arr.unshift(current);
  }
  console.log(arr.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])