function sortNumbers(input) {
  let num1 = input[0];
  let num2 = input[1];
  let num3 = input[2];

  if (num1 >= num2 && num1 >= num3) {
    console.log(num1);
    if (num2 >= num3) {
      console.log(num2);
      console.log(num3);
    }
    else {
      console.log(num3);
      console.log(num2);
    }
  }
  if (num2 >= num3 && num2 >= num1) {
    console.log(num2);
    if (num1 > num3) {
      console.log(num1);
      console.log(num3);
    }
    else {
      console.log(num3);
      console.log(num1);
    }
  }
  if (num3 >= num2 && num3 >= num1) {
    console.log(num3);
    if (num1 >= num2) {
      console.log(num1);
      console.log(num2);
    }
    else {
      console.log(num2);
      console.log(num1);
    }
  }
}
sortNumbers([420, 1337, 69])