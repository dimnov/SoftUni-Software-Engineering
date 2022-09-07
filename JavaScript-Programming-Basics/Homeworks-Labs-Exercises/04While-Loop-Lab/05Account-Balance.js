function accountBalance(input) {
  let total = 0;

  for (let index = 0; index < input.length; index++) {
    let current = input[index];

    if (current === "NoMoreMoney") {
      break;
    }
    let inputAsNumber = Number(current);

    if (inputAsNumber < 0) {
      console.log(`Invalid operation!`);
      break;
    }
    total += inputAsNumber;

    console.log(`Increase: ${inputAsNumber.toFixed(2)}`);
  }
  console.log(`Total: ${total.toFixed(2)}`);
}