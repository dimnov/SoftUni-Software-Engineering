function train(arr) {
  let passengers = arr.shift().split(' ').map(Number);
  let maxCapacity = Number(arr.shift());

  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let current = arr[i].split(' ');
    if (current[0] === "Add") {
      passengers.push(Number(current[1]));
    } else {
      for (let j = 0; j < passengers.length; j++) {
        if (passengers[j] + Number(current[0]) <= maxCapacity) {
          passengers[j] += Number(current[0]);
          break;
        }
      }
    }
  }
  console.log(passengers.join(' '));
}
train(['0 0 0 10 2 4',
  '10',
  'Add 10',
  '10',
  '10',
  '10',
  '8',
  '6']
)