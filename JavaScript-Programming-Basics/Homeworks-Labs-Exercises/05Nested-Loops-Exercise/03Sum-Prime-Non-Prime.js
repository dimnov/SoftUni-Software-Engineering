function SumPrimeNonPrime(input) {
  let index = 0;
  let command = input[index];
  index++;

  let sumPrimeNumber = 0;
  let sumNonPrimeNumber = 0;

  while (command !== "stop") {
    let number = Number(command);

    if (number < 0) {
      console.log("Number is negative.");
      command = input[index];
      index++;
      continue;
    }
    if (number === 1) {
      sumPrimeNumber += 1;
      command = input[index];
      index++;
      continue;
    }

    let prime = true;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        sumNonPrimeNumber += number;
        prime = false;
        break;
      }
    }
    if (prime) {
      sumPrimeNumber += number;
    }
    command = input[index];
    index++;
  }
  console.log(`Sum of all prime numbers is: ${sumPrimeNumber}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumber}`);
}