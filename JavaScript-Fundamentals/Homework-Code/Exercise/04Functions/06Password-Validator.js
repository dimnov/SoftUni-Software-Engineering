function passwordValidator(pass) {
  let digitCount = 0;
  let isSymbol = false;
  let passLength = pass.length;

  for (let i = 0; i < passLength; i++) {
    let current = pass[i].charCodeAt();
    let isDigit = current >= 48 && current <= 57;
    let isSmallLetter = current >= 97 && current <= 122;
    let isBigLetter = current >= 65 && current <= 90;

    if (isDigit) {
      digitCount++;
    }
    if (!isDigit && !isSmallLetter && !isBigLetter) {
      isSymbol = true;
    }
  }
  if (passLength < 6 || passLength > 10) {
    console.log(`Password must be between 6 and 10 characters`);
  }
  if (isSymbol) {
    console.log(`Password must consist only of letters and digits`);
  }
  if (digitCount < 2) {
    console.log(`Password must have at least 2 digits`);
  }
  if (digitCount >= 2 && !isSymbol && (passLength >= 6 || passLength <= 10)) {
    console.log(`Password is valid`);
  }
}
passwordValidator('mttttT14');