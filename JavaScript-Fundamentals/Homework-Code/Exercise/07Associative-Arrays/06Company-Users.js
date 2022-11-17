function companyUsers(input) {
  let result = {};

  input.forEach(line => {
    let [companyName, personID] = line.split('-> ');
    if (!result.hasOwnProperty(companyName)) {
      result[companyName] = [];
    }
    result[companyName].push(personID);
  });

  let sortedCompanies = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));
  sortedCompanies.forEach(el => {
    const companyName = el[0];
    const IDs = el[1];

    console.log(companyName);

    let uniqueIDs = new Set(IDs);
    for (const id of uniqueIDs) {
      console.log(`-- ${id}`);
    }
  });
}
companyUsers([
  'SoftUni -> AA12345',
  'SoftUni -> BB12345',
  'Microsoft -> CC12345',
  'HP -> BB12345']);