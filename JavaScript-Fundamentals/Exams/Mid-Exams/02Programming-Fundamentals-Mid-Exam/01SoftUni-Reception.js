function reception(arr) {
  let employeeOne = Number(arr[0]);
  let employeeTwo = Number(arr[1]);
  let employeeThree = Number(arr[2]);
  let students = Number(arr[3]);
  let count = 0;

  let time = 0;

  let allEmployees = employeeOne + employeeTwo + employeeThree;

  while (students > 0) {
    count++;
    if (count % 4 === 0) {
      students;
      time++;
    } else {
      students -= allEmployees;
      time++;
    }
  }
  console.log(`Time needed: ${time}h.`);
}
reception(['5', '6', '4', '20'])