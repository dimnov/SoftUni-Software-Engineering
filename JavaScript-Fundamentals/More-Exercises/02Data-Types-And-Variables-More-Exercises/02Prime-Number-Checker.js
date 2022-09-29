function primeNumCheck(num) {
  let isPrime = true;

  if (num === 1) {
    console.log('true');
  }

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }

  if (num !== 1) {
    if (isPrime) {
      console.log('true');
    } else {
      console.log('false');
    }
  }
}
primeNumCheck(1)