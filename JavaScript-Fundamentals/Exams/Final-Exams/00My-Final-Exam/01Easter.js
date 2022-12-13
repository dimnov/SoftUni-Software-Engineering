function easter(input) {
  let message = input.shift();

  let line = input.shift();

  while (line !== 'Easter') {
    let [command, arg1, arg2] = line.split(' ');

    switch (command) {
      case 'Replace':
        while (message.includes(arg1)) {
          message = message.replace(arg1, arg2);
        }
        console.log(message);
        break;

      case 'Remove':
        message = message.replace(arg1, '');
        console.log(message);
        break;

      case 'Includes':
        if (message.includes(arg1)) {
          console.log('True');
        } else {
          console.log('False');
        }
        break;

      case 'Change':
        if (arg1 === 'Lower') {
          message = message.toLowerCase();
        } else {
          message = message.toUpperCase();
        }
        console.log(message);
        break;

      case 'Reverse':
        if (arg1 <= message.length && arg2 <= message.length) {
          let messageSubstring = message.substring(Number(arg1), Number(arg2) + 1);
          messageSubstring = messageSubstring.split('').reverse().join('');
          console.log(messageSubstring);
        }
        break;
    }

    line = input.shift();
  }
}
easter(['Easterbscomming',
  'Replace b I',
  'Remove commIng',
  'Change Upper',
  'Reverse 0 5',
  'Easter'])