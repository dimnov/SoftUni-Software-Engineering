function sum(input) {
  let firstNumber = Number(input[0]);
  let finalNumber = Number(input[1]);
  let magicNumber = Number(input[2]);

  let counter = 0;

  let final = false;

  for (let i = firstNumber; i <= finalNumber; i++) {
    for (let n = firstNumber; n <= finalNumber; n++) {
      let result = i + n;
      counter++;
      if (result === magicNumber) {
        console.log(`Combination N:${counter} (${i} + ${n} = ${magicNumber})`);
        final = true;
        break;
      }
    }
    if (final) {
      break;
    }
  }

  if (!final) {
    console.log(`${counter} combinations - neither equals ${magicNumber}`);
  }
}