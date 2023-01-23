function sortArrayTwoCriteria(arr) {
  arr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

  arr.forEach(el => console.log(el));
}
sortArrayTwoCriteria(['alpha',
  'beta',
  'gamma']);