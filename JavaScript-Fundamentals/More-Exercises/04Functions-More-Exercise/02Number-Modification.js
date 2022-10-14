function numberModification(num) {

  function sum(num) {
    let numString = num.toString();
    let sum = 0;

    for (let i = 0; i < numString.length; i++) {
      sum += Number(numString[i]);
    }
    return sum;
  }

  function average(num) {
    return sum(num) / num.toString().length;
  }

  while (average(num) < 5) {
    num += '9';
  }
  console.log(num);
}
numberModification(101);