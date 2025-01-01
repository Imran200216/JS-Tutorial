function add(a, b) {
  return a + b;
}

// We can also store the functions in the variables also.
let addCheck = add;

console.log(addCheck);
console.log(add(3, 2));

/// direct initializing the variable to functions

let directAddCheck = function (a, b) {
  return a + b;
};

console.log(directAddCheck(2, 2));

/// we can pass the function in the parameters and it is said to be the function callbacks
function operation(op, a, b) { 
  return op(a, b);
}

const addFunciton = (a, b) => a + b;
const subFunction = (a, b) => a - b;

console.log(operation(addFunciton, 4, 5));
