function processListCommands(input) {
  let collection = [];

  const engine = {
    add: function (argument) {
      collection.push(argument);
    },
    remove: function (argument) {
      collection = collection.filter(element => element !== argument);
    },
    print: function () {
      console.log(collection.join(','));
    },
  };

  input.forEach(line => {
    let [command, argument] = line.split(' ');

    engine[command](argument);
  });
}
processListCommands(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);

