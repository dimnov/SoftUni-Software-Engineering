function palindrome(numArray) {
  let numArrayLength = numArray.length;
  for (let i = 0; i < numArrayLength; i++) {
    let numString = numArray[i].toString();
    let reversedString = numString.split('').reverse().join('');

    if (numString === reversedString) {
      console.log("true");
    } else {
      console.log("false");
    }
  }
}
palindrome([32, 2, 232, 1010])