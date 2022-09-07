function password(input) {
  let index = 3;
  let data = input[2];

  let username = input[0];
  let password = input[1];

  while (data !== password) {
    data = input[index];
    index++;
  }
  console.log(`Welcome ${username}!`);
}