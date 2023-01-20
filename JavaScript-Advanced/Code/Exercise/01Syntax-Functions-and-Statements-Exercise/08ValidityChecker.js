function validityChecker(x1, y1, x2, y2) {
  function isValid(x1, y1, x2, y2) {
    const distance = Math.hypot(x1 - x2, y1 - y2);

    if (Number.isInteger(distance)) {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
  }
  isValid(x1, y1, 0, 0);
  isValid(x2, y2, 0, 0);
  isValid(x1, y1, x2, y2);
}
validityChecker(2, 1, 1, 1);