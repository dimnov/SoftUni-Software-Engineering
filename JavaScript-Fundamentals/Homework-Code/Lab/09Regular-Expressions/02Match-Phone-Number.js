function matchPhoneNumber(number) {
  let pattern = /\+359+([ -])2\1\d{3}\1\d{4}\b/g;
  let text = number.shift();
  let rightNumber = text.match(pattern);

  console.log(rightNumber.join(', '));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])