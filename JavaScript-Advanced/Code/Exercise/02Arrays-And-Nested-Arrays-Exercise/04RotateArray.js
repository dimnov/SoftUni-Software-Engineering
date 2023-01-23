function rotateArr(arr, rotationNum) {
  for (let i = 0; i < rotationNum; i++) {
    arr.unshift(arr.pop());
  }
  console.log(...arr);
}
rotateArr(['1',
  '2',
  '3',
  '4'],
  2
);