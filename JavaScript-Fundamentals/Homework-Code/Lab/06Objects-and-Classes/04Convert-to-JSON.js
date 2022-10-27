function convertToJSON(name, lastName, hairColor) {
  let result = {
    name,
    lastName,
    hairColor,
  }
  let resultString = JSON.stringify(result);
  console.log(resultString);
}
convertToJSON('George', 'Jones', 'Brown')