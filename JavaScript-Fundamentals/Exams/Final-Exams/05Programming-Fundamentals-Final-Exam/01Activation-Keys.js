function activationKeys(input) {
  let activationKey = input.shift();
  let instructions = input.shift();

  while (instructions != 'Generate') {
    let [instructionName, argumentOne, argumentTwo, argumentThree] = instructions.split('>>>');

    switch (instructionName) {
      case 'Contains':
        if (activationKey.includes(argumentOne)) {
          console.log(`${activationKey} contains ${argumentOne}`);
        } else {
          console.log('Substring not found!');
        }
        break;

      case 'Flip':
        let part = activationKey.substring(argumentTwo, argumentThree);
        let newPart;

        if (argumentOne === 'Lower') {
          newPart = part.toLowerCase();
        } else if (argumentOne === 'Upper') {
          newPart = part.toUpperCase();
        }

        activationKey = activationKey.replace(part, newPart)
        console.log(activationKey);
        break;

      case 'Slice':
        let substring = activationKey.substring(argumentOne, argumentTwo);
        activationKey = activationKey.replace(substring, '');
        console.log(activationKey);
        break;
    }

    instructions = input.shift();
  }
  console.log(`Your activation key is: ${activationKey}`);
}
activationKeys(["134softsf5ftuni2020rockz42",
  "Slice>>>3>>>7",
  "Contains>>>-rock",
  "Contains>>>-uni-",
  "Contains>>>-rocks",
  "Flip>>>Upper>>>2>>>8",
  "Flip>>>Lower>>>5>>>11",
  "Generate"])