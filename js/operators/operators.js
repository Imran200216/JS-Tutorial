/// 7 + 11 = 18
/// 7, 11 => Operands
/// + , = => Operators

/// UNARY OPERTORS
let x = 1;
x = -x;
console.log(x);

/// binary operators (+ => addition, - => subtraction , % => Modulus , * => Multiplication , / => Division, ** => Power )
let a = 12,
  b = 13;

let sum = a + b;
let mul = a * b;
let sub = b - a;
let div = a / 2;
let exp = a ** 3;


console.log(sum);
console.log(mul);
console.log(sub);
console.log(div);
console.log(exp);

/// string concatenation 
let stringA = "Imran";
let stringB = "Shakina";

let conCatString = stringA + stringB;

console.log(conCatString);


let stringDemo1 = "1";
let stringDemo2 = "2";

// let stringResult = Number(stringDemo1) + Number(stringDemo2);
//  or 

// +stringDemo1 => Unary Plus is also used to convert the string to number 
let stringResult = +stringDemo1 + +stringDemo2;
console.log(stringResult);

/// chaining assignments 

let firstNumber = secondNumber = thirdNumber = 20;

console.log(firstNumber, secondNumber, thirdNumber);

/// increment operator , decrement operator 

let inc = 20;

inc++;
console.log (inc);

let dec = 20;
dec--;
console.log(dec);

let sample1 = 12;
let sample2 = 13;

let sampleAnswer = ++sample1 + sample2--;
console.log(sampleAnswer);