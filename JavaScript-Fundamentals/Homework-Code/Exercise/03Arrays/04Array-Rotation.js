function arrayRotation(arr, num) {
  for (let i = 0; i < num; i++) {
    let numToMove = arr.shift();
    arr.push(numToMove);
  }
  console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)