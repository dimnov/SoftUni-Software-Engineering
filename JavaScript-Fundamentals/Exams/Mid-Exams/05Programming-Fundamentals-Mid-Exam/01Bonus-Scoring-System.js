function bonusScoring(arr) {

  let students = Number(arr.shift());
  let lectures = Number(arr.shift());
  let bonus = Number(arr.shift());

  let maxStudent = 0;
  let maxBonus = 0;

  for (let i = 0; i < students; i++) {
    let student = Number(arr[i]) / lectures * (5 + bonus);

    if (student >= maxBonus) {
      maxBonus = student;
      maxStudent = Number(arr[i]);
    }
  }

  console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
  console.log(`The student has attended ${maxStudent} lectures.`);
}
bonusScoring([
  '5', '25', '30',
  '12', '19', '24',
  '16', '20']);