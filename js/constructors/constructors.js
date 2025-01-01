let a = {
  name: "imran",
};

/// constructor
function User(a) {
  this.name = a;
}

let imran = new User("imran");
let shakina = new User("shakina");

console.log(imran, shakina);

/// triva question

function Add() {
  this.firstNum = 20;
  this.secondNum = 30;
  this.thirdNum = function add(thirdNum) {
    return this.firstNum + this.secondNum + thirdNum;
  };
}

let sum = new Add();

console.log (sum.thirdNum(30));

