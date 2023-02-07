function solution(num) {
  return function (val) {
    return num + val;
  };
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));