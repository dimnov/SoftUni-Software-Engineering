function numbers(input) {
  let inputArr = input.split(' ').map(Number);
  let average = 0;
  let sum = 0;

  let inputLength = inputArr.length;

  for (let i = 0; i < inputLength; i++) {
    sum += inputArr[i];
  }
  average = sum / inputLength;
  let newAverage = [];

  for (let i = 0; i < inputLength; i++) {
    if (average < inputArr[i]) {
      newAverage.push(inputArr[i]);
    }
  }
  let newAverageLength = newAverage.length;

  if (newAverageLength <= 0) {
    console.log('No');
  }
  if (newAverageLength >= 5) {
    let sort = newAverage.sort((a, b) => b - a);
    let splice = sort.splice(0, 5);
    console.log(splice.join(' '));
  } else if (newAverageLength < 5 && newAverageLength !== 0) {
    let sorted = newAverage.sort((a, b) => b - a);
    console.log(sorted.join(' '));
  }
}
numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');