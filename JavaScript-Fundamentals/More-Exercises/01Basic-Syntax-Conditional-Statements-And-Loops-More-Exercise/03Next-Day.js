function calcNextDay(year, month, day) {
  var date = new Date(year, month - 1, day);
  var oneDay = 24 * 60 * 60 * 1000;//86 400 000 milliseconds in one day
  var nextDate = new Date(date.getTime() + oneDay);
  console.log(nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1) + "-" + nextDate.getDate());
}

calcNextDay(2016, 9, 30);