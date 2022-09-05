function onTimeForTheExam(input) {
  let examHour = Number(input[0]);
  let examMinute = Number(input[1]);
  let arriveHour = Number(input[2]);
  let arriveMinute = Number(input[3]);

  let examTime = (examHour * 60) + examMinute;
  let arriveTime = (arriveHour * 60) + arriveMinute;

  let diff = Math.abs(arriveTime - examTime);

  let hour = Math.floor(diff / 60);
  let min = diff % 60;

  if (examTime < arriveTime) {
    console.log("Late");
    if (diff < 60) {
      console.log(`${min} minutes after the start`);
    } else {
      if (min < 10) {
        console.log(`${hour}:0${min} hours after the start`);
      } else {
        console.log(`${hour}:${min} hours after the start`);
      }
    }
  } else if (arriveTime <= examTime && examTime - arriveTime <= 30) {
    console.log("On time");
    if (diff > 0) {
      console.log(`${min} minutes before the start`);
    }
  } else {
    console.log("Early");
    if (diff < 60) {
      console.log(`${min} minutes before the start`);
    } else {
      if (min < 10) {
        console.log(`${hour}:0${min} hours before the start`);
      } else {
        console.log(`${hour}:${min} hours before the start`);
      }
    }
  }
}