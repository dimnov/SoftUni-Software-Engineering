function evenPositionElement(arr) {
  let arrLength = arr.length;
  let evenArr = [];

  for (let i = 0; i < arrLength; i++) {
    if (i % 2 == 0) {
      evenArr.push(arr[i]);
    }
  }
  console.log(evenArr.join(' '));
}
evenPositionElement(['20', '30', '40', '50', '60']);