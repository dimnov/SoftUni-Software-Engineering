function heartDelivery(arr) {
  let products = arr.shift().split('@');
  let current = arr.shift();

  while (current !== 'Love!') {
    let command = current.split(' ');



    current = arr.shift();
  }
}
heartDelivery(["10@10@10@2",
  "Jump 1",
  "Jump 2",
  "Love!"]);