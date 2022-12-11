function secretChat(input) {
  let message = input.shift();
  let line = input.shift();

  while (line !== 'Reveal') {
    let command = line.split(':|:');

    switch (command[0]) {
      case 'ChangeAll':
        while (message.includes(command[1])) {
          message = message.replace(command[1], command[2]);
        }
        console.log(message);
        break;

      case 'Reverse':
        if (message.includes(command[1])) {
          message = message.replace(command[1], '');
          let reversed = command[1].split('').reverse().join('');
          message = message + reversed;
        } else {
          console.log('error');
          break;
        }
        console.log(message);
        break;

      case 'InsertSpace':
        let messageArr = message.split('');
        messageArr.splice(Number(command[1]), 0, ' ');
        message = messageArr.join('');
        console.log(message);
        break;
    }
    line = input.shift();
  }
  console.log(`You have a new text message: ${message}`);
}
secretChat([
  'heVVodar!gniV',
  'ChangeAll:|:V:|:l',
  'Reverse:|:!gnil',
  'InsertSpace:|:5',
  'Reveal'
]);