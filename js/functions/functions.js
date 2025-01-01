/// main use of functions is code reusability
/// also called as methods

/// Sum function

/// (a, b) => parameters
function add(a, b) {
  return a + b;
}

/// add(2, 3) => arguments
console.log(add(2, 3));

// default parameters
function addDefaultParameters(a, b = 20) {
  return a + b;
}

console.log(addDefaultParameters(10));

function checkOddOrEven(num) {
 return num % 2 == 0 ? "Even Number" : "Odd Number";
} 

console.log(checkOddOrEven(23));