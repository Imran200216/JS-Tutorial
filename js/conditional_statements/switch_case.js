let num = 10;

switch (num) {
  case 1:
    console.log("One");
    break;
  case 2:
    console.log("Two");
    break;
  case 10:
    console.log("Ten");
    break;
  default:
    console.log("Not Found");
}

let a = 20,
  b = 10;

let op = "*";

switch (op) {
  case "+": 
    console.log(`${a} + ${b} = ${a + b}`);
    break;
  case "-":
    console.log(`${a} - ${b} = ${a - b}`);
    break;
  case "*":
    console.log(`${a} * ${b} = ${a * b}`);
    break;
  case "/":
    console.log(`${a} / ${b} = ${a / b}`);
    break;
  case "%":
    console.log(`${a} % ${b} = ${a % b}`);
    break;

  default:
    console.log("Operator not found!");
}
