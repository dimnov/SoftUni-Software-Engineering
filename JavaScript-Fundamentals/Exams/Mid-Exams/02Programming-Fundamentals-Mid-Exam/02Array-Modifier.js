function arrayModifier(arr) {
  let numbers = arr.shift().split(' ');
  let array = numbers.map(Number);
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let current = arr[i].split(' ');
    let command = current[0];
    let index1 = current[1];
    let index2 = current[2];

    if (command === 'swap') {
      let temp = array[index1];
      array[index1] = array[index2];
      array[index2] = temp;
    }
    if (command === 'multiply') {
      let first = array[index1];
      let second = array[index2];
      array[index1] = first * second;
    }
    if (command === 'decrease') {
      array = array.map(x => x - 1);
    }
  }
  console.log(array.join(', '));
}
arrayModifier([
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'])