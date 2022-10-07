function formatGrade(grade) {
  let gradeAnnotation = '';

  if (grade < 3.5) {
    gradeAnnotation = "Poor";
  } else if (grade < 4.5) {
    gradeAnnotation = "Good";
  } else if (grade < 5.5) {
    gradeAnnotation = "Very good";
  } else {
    gradeAnnotation = "Excellent"
  }

  if (grade < 3) {
    console.log(`Fail (2)`);
  } else {
    console.log(`${gradeAnnotation} (${grade.toFixed(2)})`);
  }
}
formatGrade(2.33)