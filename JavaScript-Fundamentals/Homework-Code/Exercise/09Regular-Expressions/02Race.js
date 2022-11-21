function race(input) {
  let racers = input.shift().split(', ');
  let raceObject = {};

  let patternLetters = /[A-Za-z]+/g;
  let patternDistance = /[0-9]+/g;

  let command = input.shift();
  while (command !== 'end of race') {
    const currentName = command.match(patternLetters).join('');
    const currentDistance = command.match(patternDistance).join('');

    if (racers.includes(currentName)) {
      let distance = 0;


      for (const digit of currentDistance) {
        distance += Number(digit)
      }

      if (!raceObject.hasOwnProperty(currentName)) {
        raceObject[currentName] = distance;
      } else {
        raceObject[currentName] += distance;
      }
    }
    command = input.shift();
  }

  let sorted = Object.entries(raceObject).sort((a, b) => b[1] - a[1]);

  const firstPlace = sorted[0][0];
  const secondPlace = sorted[1][0];
  const thirdPlace = sorted[2][0];

  console.log(`1st place: ${firstPlace}`);
  console.log(`2nd place: ${secondPlace}`);
  console.log(`3rd place: ${thirdPlace}`);
}
race(['George, Peter, Bill, Tom',
  'G4e@55or%6g6!68e!!@ ',
  'R1@!3a$y4456@',
  'B5@i@#123ll',
  'G@e54o$r6ge#',
  '7P%et^#e5346r',
  'T$o553m&6',
  'end of race']);