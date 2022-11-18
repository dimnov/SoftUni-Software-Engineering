function schoolGrades(input) {
  let students = {};

  for (const line of input) {
    let studentArr = line.split(' ');
    let name = studentArr.shift();
    let grades = studentArr.map(x => Number(x));

    if (!students[name]) {
      students[name] = [];
    }
    students[name] = students[name].concat(grades);
  }

  let sorted = Object.entries(students).sort((a, b) => a[0].localeCompare(b[0]));

  for (const [name] of sorted) {
    let sumAverage = (students[name].reduce((a, b) => (a + b)) / students[name].length);
    console.log(`${name}: ${sumAverage.toFixed(2)}`);
  }
}
schoolGrades(['Steven 3 5 6 4',
  'George 4 6',
  'Tammy 2 5 3',
  'Steven 6 3']);