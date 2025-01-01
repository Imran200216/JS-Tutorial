let number = 4;

let ans = 1;

// for (let i = 1; i <= number; i++) {
//   ans = i * ans;
// }
 
// console.log(ans);

/// while loop 


let i = 1;

while (i <= number){
   ans *= i;
   i++;
} 

console.log("The While loop answer is "+ans);