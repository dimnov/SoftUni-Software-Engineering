function charactersInRange(charOne, charTwo) {
  let firstChar = Math.min(charOne.charCodeAt(), charTwo.charCodeAt());
  let secondChar = Math.max(charTwo.charCodeAt(), charOne.charCodeAt());

  let resultString = '';

  for (let i = firstChar + 1; i < secondChar; i++) {
    let singleChar = String.fromCharCode(i);
    resultString += `${singleChar} `;
  }

  console.log(resultString);
}
charactersInRange('C', '#')