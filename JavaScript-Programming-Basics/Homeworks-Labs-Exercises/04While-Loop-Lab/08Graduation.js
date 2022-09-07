function graduation(input) {
  let name = input[0];
  let grade = 1;
  let index = 0;
  let sum = 0;
  let fail = 0;

  while (grade <= 12) {
    index++;
    let grades = Number(input[index]);

    if (grades >= 4) {
      sum += grades;
      grade++;
    } else {
      fail++;
      break;
    }
  }

  let avgGrades = sum / 12;

  if (fail > 0) {
    console.log(`${name} has been excluded at ${grade} grade`);
  } else {
    console.log(`${name} graduated. Average grade: ${avgGrades.toFixed(2)}`);
  }

}