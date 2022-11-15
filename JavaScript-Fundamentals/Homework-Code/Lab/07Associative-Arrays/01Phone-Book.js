function phoneBook(input) {
  let book = {};

  for (const entry of input) {
    let [name, phone] = entry.split(' ');
    book[name] = phone;
  }

  for (const name in book) {
    console.log(`${name} -> ${book[name]}`);
  }
}
phoneBook(['Tim 0834212554',
  'Peter 0877547887',
  'Bill 0896543112',
  'Tim 0876566344']);