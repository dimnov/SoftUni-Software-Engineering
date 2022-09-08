function trainTheTrainers(input) {
  let index = 0;
  let people = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let sumOfGrade = 0;
  let counter = 0;

  while (command !== "Finish") {
    let name = command;
    counter++;
    let tempSumOfGrade = 0;
    for (let i = 0; i < people; i++) {
      let grade = Number(input[index]);
      index++;
      tempSumOfGrade += grade;
    }
    let tempAvgGrade = tempSumOfGrade / people;
    sumOfGrade += tempAvgGrade;
    console.log(`${name} - ${tempAvgGrade.toFixed(2)}.`);
    command = input[index];
    index++;
  }
  let avgGrade = sumOfGrade / counter;
  console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}