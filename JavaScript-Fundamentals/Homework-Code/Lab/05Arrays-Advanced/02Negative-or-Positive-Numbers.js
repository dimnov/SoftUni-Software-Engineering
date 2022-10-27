function negativeOrPositiveNumbers(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      array.unshift(arr[i]);
    } else {
      array.push(arr[i]);
    }
  }
  console.log(array.join('\n'));
}
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])