let numbers = 10;

for (let i = 1; i < numbers; i++) {
  if (i == 2) {
    console.log("Two is reached");
    break;
  }

  console.log(i);
}

let evenAnswer = 0;

for (let i = 1; i < numbers; i++) {
  if (i % 2 == 0) {
    evenAnswer += i;
    console.log(evenAnswer);
    continue;
  }

  console.log(i);
} 
