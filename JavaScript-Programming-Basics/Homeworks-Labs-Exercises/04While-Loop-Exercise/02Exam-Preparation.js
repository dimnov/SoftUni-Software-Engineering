function examPreparation(input) {
  let index = 0;
  let negativeGradeCount = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let negativeGradeCounter = 0;
  let sumOfGrade = 0;
  let countProblem = 0;
  let taskName = "";
  let stop = false;

  while (command !== "Enough") {
    taskName = command;
    let tempGrade = Number(input[index]);
    index++;
    countProblem++;
    sumOfGrade += tempGrade;

    if (tempGrade <= 4) {
      negativeGradeCounter++;
      if (negativeGradeCounter === negativeGradeCount) {
        stop = true;
        break;
      }
    }

    command = input[index];
    index++;
  }

  let avg = sumOfGrade / countProblem;

  if (stop) {
    console.log(`You need a break, ${negativeGradeCount} poor grades.`);
  } else {
    console.log(`Average score: ${avg.toFixed(2)}`);
    console.log(`Number of problems: ${countProblem}`);
    console.log(`Last problem: ${taskName}`);
  }
}