function addAndRemove(arr) {
  let result = [];
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (arr[i] === 'add') {
      result.push(i + 1);
    } else {
      result.pop();
    }
  }
  if (result.length == 0) {
    console.log('Empty');
  } else {
    console.log(result.join(' '));
  }
}
addAndRemove(['add', 'add', 'add', 'add'])