// function add(n) {
//   let sum = n;

//   function f(x) {
//     sum += x;
//     return f;
//   }

//   f.toString = function () {
//     return sum;
//   };

//   return f;
// }

function add(n) {
  let sum = n;

  function f(x) {
    sum += x;
    return f;
  }

  f.toString = function () {
    return sum;
  }

  return f;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());