function inventory(arr) {
  let inventory = arr.shift().split(', ');
  let commands = arr.shift();

  while (commands !== 'Craft!') {
    let current = commands.split(' - ');
    let command = current[0];
    let item = current[1];

    switch (command) {
      case 'Collect':
        if (inventory.includes(item)) {
          break;
        } else {
          inventory.push(item);
        }
        break;

      case 'Drop':
        if (inventory.includes(item)) {
          let index = inventory.indexOf(item);

          if (index > -1) {
            inventory.splice(index, 1);
          }
        } else {
          break;
        }
        break;

      case 'Combine Items':
        let splitItems = current[1].split(':');
        let index = inventory.indexOf(splitItems[0]);

        if (index >= 0) {
          inventory.splice(index + 1, 0, splitItems[1]);
        }
        break;

      case 'Renew':

        let i = inventory.indexOf(item);
        if (i >= 0) {
          inventory.splice(i, 1);
          inventory.push(item);
        }
        break;
    }
    commands = arr.shift();
  }
  console.log(inventory.join(', '));
}
inventory([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Combine Items - v:Bow',
  'Renew - Iron',
  'Craft!']);