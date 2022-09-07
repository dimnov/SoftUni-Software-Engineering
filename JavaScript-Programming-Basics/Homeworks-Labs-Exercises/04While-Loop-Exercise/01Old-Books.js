function library(input) {
  let index = 1;
  let favouriteBook = input[0];
  let rightBook = false;

  let nextBook = input[index];

  while (nextBook !== "No More Books") {
    if (nextBook === favouriteBook) {
      rightBook = true;
      break;
    }
    index++;
    nextBook = input[index];
  }
  if (rightBook === false) {
    console.log("The book you search is not here!");
    console.log(`You checked ${index - 1} books.`);
  } else {
    console.log(`You checked ${index - 1} books and found it.`);
  }
}