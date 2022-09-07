function Sequence(input) {

  let number = Number(input[0]);
  let count = 1;

  while (count <= number) {
    console.log(count);
    count = 2 * count + 1;
  }
}