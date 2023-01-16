function dayInAMonth(month, year) {
  let result = new Date(year, month, 0).getDate();
  console.log(result);
}
dayInAMonth(1, 2012);