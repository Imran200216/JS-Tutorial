/// < - less than, > - greater than
/// comparision operators always return the boolean type

/// <= => smaller than, >= => greater than, == => equal to, != => not equal to 

let a = 10;
let b = 10;

let result = a <= b;

console.log(result);


/////////////////////////////////////
// we can compare the two string also 
/// but it is compared with the unicode values

let name1 = "Imran";

let name2 = "Shakina";

let nameResult = a < b;

console.log(nameResult);

////////////////// 

// comparing the string to number 

let sampleString1 = '2';
let sampleNumber = 1;

let sampleResult = a > b;
console.log(sampleResult);

// comparing the boolean to number (Even it is in number data type it converts to number and performs the comparsion operations)

let smapleBoolean = false;
let sampleNumber2 = 0;

let sampleBooleanNumberResult = smapleBoolean == sampleNumber2;

console.log(sampleBooleanNumberResult);





let alpha = '0';
alpha = Boolean(alpha);

let beta = 0;
beta = Boolean(beta);

let resultAlphaBeta = alpha == beta;

console.log(resultAlphaBeta);

/////////////////////////

// null and undefined 

console.log (null > 0);
console.log(null <= 0);
console.log (null < 0);
console.log (null == 0);

console.log (null == 0);