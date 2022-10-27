function printElements(arr) {
  let lastNum = arr.pop();
  let result = [];

  for (let i = 0; i <= arr.length; i++) {
    if (i % lastNum === 0) {
      result.push(arr[i]);
    }
  }
  console.log(result.join(' '));
}
printElements(['5', '20', '31', '4', '20', '2'])
