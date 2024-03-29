function solution() {
  let string = '';

  function append(str) {
    string += str;
  }

  function removeStart(n) {
    string = string.slice(n);
  }

  function removeEnd(n) {
    string = string.slice(0, -n);
  }

  function print() {
    console.log(string);
  }

  return {
    append,
    removeStart,
    removeEnd,
    print
  }
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();