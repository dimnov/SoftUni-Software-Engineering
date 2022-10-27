function requiredReading(pagesNum, pageHour, readDays) {
  let time = (pagesNum / pageHour) / readDays;
  console.log(time);
}
requiredReading(432, 15, 4)