function traveling(input) {
  index = 1;

  let destination = input[0];
  let budget = Number(input[1]);

  let savings = 0;

  while (destination !== "End") {
    index++;
    while (savings < budget) {
      savings += Number(input[index]);
      index++;
    }

    console.log(`Going to ${destination}!`);
    destination = input[index++];
    budget = Number(input[index]);
    savings = 0;
  }
}