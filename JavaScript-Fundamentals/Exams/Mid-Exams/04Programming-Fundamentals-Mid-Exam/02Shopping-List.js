function shoppingList(arr) {

  let products = arr.shift().split('!');
  let arrLength = arr.length - 1;

  for (let i = 0; i < arrLength; i++) {

    [command, itemOne, itemTwo] = arr.shift().split(' ');

    let index = products.indexOf(itemOne);

    switch (command) {
      case "Urgent":
        if (products.includes(itemOne) === false) {
          products.unshift(itemOne);
        }
        break;

      case "Unnecessary":
        if (products.includes(itemOne) === true) {
          products.splice(index, 1);
        }
        break;

      case "Correct":
        if (products.includes(itemOne) === true) {
          products[index] = itemTwo;
        }
        break;

      case "Rearrange":
        if (products.includes(itemOne) === true) {
          products.splice(index, 1);
          products.push(itemOne);
        }
        break;

      default:
        break;
    }
  }
  console.log(products.join(', '));
}
shoppingList((["Tomatoes!Potatoes!Bread",
  "Unnecessary Milk",
  "Urgent Tomatoes",
  "Go Shopping!"]));