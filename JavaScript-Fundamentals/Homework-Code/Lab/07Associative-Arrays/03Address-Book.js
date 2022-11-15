function addressBook(input) {
  let book = {};

  for (const entry of input) {
    let [name, address] = entry.split(':');
    book[name] = address;
  }
  let bookEntries = Object.entries(book);

  bookEntries.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0]));

  for (const entry of bookEntries) {
    let [name, address] = entry;
    console.log(`${name} -> ${address}`);
  }
}
addressBook(['Tim:Doe Crossing',
  'Bill:Nelson Place',
  'Peter:Carlyle Ave',
  'Bill:Ornery Rd'])