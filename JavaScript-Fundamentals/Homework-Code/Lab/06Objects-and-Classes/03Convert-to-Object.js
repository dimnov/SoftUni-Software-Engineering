function convertObject(jsonStr) {
  let person = JSON.parse(jsonStr);

  for (let key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`);
  }
}
convertObject('{"name": "George", "age": 40, "town": "Sofia"}');