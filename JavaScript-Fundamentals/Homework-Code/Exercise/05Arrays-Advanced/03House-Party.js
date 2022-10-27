function houseParty(arr) {
  let guests = [];

  for (const el of arr) {
    let command = el.split(' ');
    let name = command[0];

    if (command.length === 3) {
      if (guests.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        guests.push(name);
      }
    } else {
      if (!guests.includes(name)) {
        console.log(`${name} is not in the list!`);
      } else {
        let index = guests.indexOf(name);
        guests.splice(index, 1);
      }
    }
  }
  console.log(guests.join('\n'));
}
houseParty(['Tom is going!',
  'Annie is going!',
  'Tom is going!',
  'Garry is going!',
  'Jerry is going!']
)