function filterEmployees(data, criteria) {
  const employees = JSON.parse(data);
  let filteredEmployees = '';
  let index = -1;

  if (criteria === 'all') filteredEmployees = employees;
  else {
    const [key, value] = criteria.split('-');

    filteredEmployees = employees.filter(employee => employee[key] === value);
  }

  for (const employee of filteredEmployees) {
    index++;
    console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
  }
}

filterEmployees(`[{
  "id": "1",
  "first_name": "Ardine",
  "last_name": "Bassam",
  "email": "abassam0@cnn.com",
  "gender": "Female"
}, {
  "id": "2",
  "first_name": "Kizzee",
  "last_name": "Jost",
  "email": "kjost1@forbes.com",
  "gender": "Female"
},  
{
  "id": "3",
  "first_name": "Evanne",
  "last_name": "Maldin",
  "email": "emaldin2@hostgator.com",
  "gender": "Male"
}]`,
  'gender-Female');