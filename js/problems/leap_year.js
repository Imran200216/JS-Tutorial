let x = 0;

x > 0
  ? console.log("Positive number")
  : x < 0
  ? console.log("Negative number")
  : console.log("zero");

let year = 2001;

year % 4 == 0
  ? console.log("Leap year")
    ? year % 100 == 0 && year % 4 == 0
    : console.log("Leap year")
  : console.log("Not a leap year");
