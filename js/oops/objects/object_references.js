/// to check whether the key and value is presented or not

let user = {
  name: "Imran",
  age: 22,
};

/// to overview all objects 
for (key in user){
    console.log(user[key]); 
    
}

/// to check whether the key and value is presented or not using in keyword (return the boolean type)
console.log("age" in user);

console.log("dob" in user);

let a = {
  name: "Imran",
  skills: "Programming",
};

let b = a;

console.log (a, b);

// this is called the object reference  (because this happens when we assign for one objects )
b.name = "Shakina";

console.log(a, b);



/// we are assinging the const keyboard but we can also change the values in the objects 
const king = {
  name: "Imran",
  age: 20,
};

king.name = "Shakina";

console.log(king);