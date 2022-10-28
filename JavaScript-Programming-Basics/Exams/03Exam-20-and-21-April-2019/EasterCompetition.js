function easterCompetition(input) {
  let easterBread = Number(input[0]);
  let name = input[1];
  let grade = '';
  let bestName = '';
  let gradeCount = 0;
  let maxGrade = 0;
  let index = 1;

  for (let i = 1; i <= easterBread; i++) {
    name = input[index];
    index++;
    grade = input[index];

    while (grade !== "Stop") {
      gradeCount += Number(grade);
      index++;
      grade = input[index];
    }
    if (grade === "Stop") {
      index++;
      console.log(`${name} has ${gradeCount} points.`);
      if (gradeCount > maxGrade) {
        bestName = name;
        maxGrade = gradeCount;
        console.log(`${name} is the new number 1!`);
      }
      gradeCount = 0;
    }
  }
  console.log(`${bestName} won competition with ${maxGrade} points!`);
}
easterCompetition(["3",
  "Chef Manchev",
  "10",
  "10",
  "10",
  "10",
  "Stop",
  "Natalie",
  "8",
  "2",
  "9",
  "Stop",
  "George",
  "9",
  "2",
  "4", "2", "Stop"])