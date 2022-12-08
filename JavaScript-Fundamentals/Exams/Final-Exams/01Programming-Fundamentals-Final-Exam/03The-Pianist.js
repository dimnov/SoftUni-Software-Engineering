function thePianist(input) {
  let pieces = Number(input.shift());
  let list = {};

  for (let i = 0; i < pieces; i++) {
    let [piece, composer, key] = input.shift().split('|');

    list[piece] = {
      composer,
      key,
    }
  }

  while (input[0] !== 'Stop') {
    let commands = input.shift().split('|');
    let command = commands[0];
    let name = commands[1];

    switch (command) {
      case 'Add':
        if (!list.hasOwnProperty(name)) {
          list[name] = {
            composer: commands[2],
            key: commands[3],
          }
          console.log(`${name} by ${commands[2]} in ${commands[3]} added to the collection!`);
          break;
        }
        console.log(`${name} is already in the collection!`);
        break;

      case 'Remove':
        if (!list.hasOwnProperty(name)) {
          console.log(`Invalid operation! ${name} does not exist in the collection.`);
          break;
        }
        delete list[name];
        console.log(`Successfully removed ${name}!`);
        break;

      case 'ChangeKey':
        if (!list.hasOwnProperty(name)) {
          console.log(`Invalid operation! ${name} does not exist in the collection.`);
          break;
        }
        list[name].key = commands[2];
        console.log(`Changed the key of ${name} to ${commands[2]}!`);
        break;
    }
  }

  for (const [name, piece] of Object.entries(list)) {
    console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
  }
}
thePianist([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop'
]);