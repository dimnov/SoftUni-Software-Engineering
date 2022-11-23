function flightSchedule(array) {

  let firstArr = array.shift();
  let secondArr = array.shift();
  let thirdArr = array.shift();

  let flights = {};

  for (const line of firstArr) {
    let [number, destination] = line.split(' ');
    flights[number] = { Destination: destination, Status: 'Ready to fly' };
  }

  for (const line of secondArr) {
    let [number, status] = line.split(' ');

    if (flights.hasOwnProperty(number)) {
      flights[number].Status = status;
    }
  }

  for (const line in flights) {
    if (flights[line].Status == thirdArr) {
      console.log(flights[line]);
    }
  }
}
flightSchedule([['WN269 Delaware',
  'FL2269 Oregon',
  'WN498 Las Vegas',
  'WN3145 Ohio',
  'WN612 Alabama',
  'WN4010 New York',
  'WN1173 California',
  'DL2120 Texas',
  'KL5744 Illinois',
  'WN678 Pennsylvania'],
['DL2120 Cancelled',
  'WN612 Cancelled',
  'WN1173 Cancelled',
  'SK430 Cancelled'],
['Cancelled']]);