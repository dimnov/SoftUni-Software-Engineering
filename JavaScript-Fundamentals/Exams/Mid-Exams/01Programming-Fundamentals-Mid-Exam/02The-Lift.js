function theLift(arr) {
  let people = Number(arr.shift());
  let wagons = arr.toString().split(' ').map(Number);

  let fullWagon = 0;
  let newWagons = [];

  let wagonsLength = wagons.length;

  for (let i = 0; i < wagonsLength; i++) {
    let singleWagon = wagons[i];
    let emptySpaces = false;
    let noMorePeople = false;

    if (singleWagon < 4 && people > 0) {
      for (let j = 0; j <= 3; j++) {
        people--;
        singleWagon++;
        wagons[i] = singleWagon;

        if (people === 0 && wagons.some(w => w < 4)) {
          console.log(`The lift has empty spots!`);
          emptySpaces = true;
          break;
        } else if (people === 0) {
          noMorePeople = true;
          break;
        }

        if (singleWagon === 4) {
          break;
        }
      }

      if (emptySpaces || noMorePeople) {
        break;
      }
    }
  }

  if (people > 0 && wagons.every(w => w === 4)) {
    console.log(`There isn't enough space! ${people} people in a queue!`);
  }
  console.log(wagons.join(' '));
}
theLift(["15", "0 0 0 0 0"]);