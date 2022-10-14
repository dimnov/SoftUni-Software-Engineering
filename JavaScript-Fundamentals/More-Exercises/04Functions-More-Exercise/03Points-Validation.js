function pointsValidation(arr) {
  let x1 = arr[0];
  let x2 = arr[2];

  let y1 = arr[1];
  let y2 = arr[3];

  let firstCheck = checkFirst(arr);
  let secondCheck = checkSecond(arr);
  let thirdCheck = checkThird(arr);

  if (firstCheck === Math.trunc(firstCheck)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }
  if (secondCheck === Math.trunc(secondCheck)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }
  if (thirdCheck === Math.trunc(thirdCheck)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }

  function checkFirst() {
    let check = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    return check;
  }
  function checkSecond() {
    let check = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    return check;
  }
  function checkThird() {
    let check = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
    return check;
  }
}
pointsValidation([3, 0, 0, 4])