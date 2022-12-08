function adAstra(input) {
  let pattern = /([#\|])(?<name>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/gm;

  let productStore = [];
  let totalCalories = 0;

  let index = input.shift();
  let match = index.matchAll(pattern);

  for (const el of match) {
    let name = el.groups['name'];
    let date = el.groups['date'];
    let calories = el.groups['calories'];

    totalCalories += Number(calories);

    let data = `Item: ${name}, Best before: ${date}, Nutrition: ${calories}`;
    productStore.push(data);
  }

  let days = Math.floor(totalCalories / 2000);

  console.log(`You have food to last you for: ${days} days!`);
  productStore.forEach(x => console.log(x));
}
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']
);