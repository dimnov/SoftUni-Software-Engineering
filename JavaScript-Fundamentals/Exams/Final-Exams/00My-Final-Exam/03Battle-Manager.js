function solve(input) {
  let line = input.shift();
  let battlesObject = {};

  while (line !== 'Results') {
    let [command, arg1, arg2, arg3] = line.split(':');

    if (command === 'Add') {
      if (!battlesObject.hasOwnProperty(arg1)) {
        battlesObject[arg1] = {
          health: Number(arg2),
          energy: Number(arg3),
        }
      } else {
        battlesObject[arg1].health += Number(arg2);
      }
    } else {
      switch (command) {
        case 'Attack':
          if (battlesObject.hasOwnProperty(arg1) && battlesObject.hasOwnProperty(arg2)) {
            battlesObject[arg2].health -= Number(arg3);
            battlesObject[arg1].energy -= 1;
          }
          if (battlesObject.hasOwnProperty(arg2) && battlesObject[arg2].health <= 0) {
            delete battlesObject[arg2];
            console.log(`${arg2} was disqualified!`);
          }
          if (battlesObject.hasOwnProperty(arg1) && battlesObject[arg1].energy <= 0) {
            delete battlesObject[arg1];
            console.log(`${arg1} was disqualified!`);
          }
          break;
        case 'Delete':
          if (arg1 === 'All') {
            for (const hero in battlesObject) {
              delete battlesObject[hero];
            }
            break;
          }
          if (battlesObject.hasOwnProperty(arg1)) {
            delete battlesObject[arg1];
          }
          break;
      }
    }
    line = input.shift();
  }

  console.log(`People count: ${Object.keys(battlesObject).length}`);

  for (const hero in battlesObject) {
    console.log(`${hero} - ${battlesObject[hero].health} - ${battlesObject[hero].energy}`);
  }
}
solve(["Add:Mark:1000:5",
  "Add:Clark:1000:2",
  "Attack:Clark:Mark:500",
  "Attack:Clark:Mark:800",
  "Add:Charlie:4000:10",
  "Results"])