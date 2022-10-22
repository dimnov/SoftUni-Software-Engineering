function heartDelivery(arr) {
  let numbers = arr.shift().split('@').map(Number);
  let current = arr.shift();

  let currentIndex = 0;

  while (current !== 'Love!') {
    let command = current.split(' ');
    let jumps = Math.abs(command[1]);

    currentIndex += jumps;

    if (currentIndex >= numbers.length) {
      currentIndex = 0;
    }

    if (numbers[currentIndex] === 0) {
      console.log(`Place ${currentIndex} already had Valentine's day.`);
    } else {
      numbers[currentIndex] -= 2;

      if (numbers[currentIndex] === 0) {
        console.log(`Place ${currentIndex} has Valentine's day.`);
      }
    }
    current = arr.shift();
  }

  let isTrue = true;
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== 0) {
      isTrue = false;
      sum++;
    }
  }

  console.log(`Cupid's last position was ${currentIndex}.`);

  if (isTrue) {
    console.log(`Mission was successful.`);
  } else {
    console.log(`Cupid has failed ${sum} places.`);
  }
}
heartDelivery(["2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!"]);