function imitationGame(input) {
  let encryptedMessage = input.shift();
  let index = input.shift();
  let tempMessage = '';

  while (index !== 'Decode') {
    let [command, number, replacement] = index.split('|');

    switch (command) {
      case 'Move':
        let substring = encryptedMessage.substring(0, number);
        tempMessage = encryptedMessage.replace(substring, '');
        tempMessage += substring;
        encryptedMessage = tempMessage;
        break;
      case 'Insert':
        let result = encryptedMessage.slice(0, number) + replacement + encryptedMessage.slice(number);
        encryptedMessage = result;
        break;
      case 'ChangeAll':
        while (encryptedMessage.includes(number)) {
          tempMessage = encryptedMessage.replace(number, replacement);
          encryptedMessage = tempMessage;
        }
        break;
    }
    index = input.shift();
  }
  console.log(`The decrypted message is: ${encryptedMessage}`);
}
imitationGame([
  'owyouh',
  'Move|2',
  'Move|3',
  'Insert|3|are',
  'Insert|9|?',
  'Decode',
]);