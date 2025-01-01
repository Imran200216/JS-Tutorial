/// objects is of key value pair
let x = {
  name: "shakina",
  age: 30,
  address: "saram",
};

let y = {
  name: "imran",
  age: 21,
  address: "Saram",
  phoneNumber: "6369476256",
  skilss: {
    codingMarks: 100,
  },
};

console.table(y);

console.log(typeof x);
console.log(x.name);
console.log(x.age);
console.log(x.address);

console.log(typeof y);
console.log(y.name, y.age, y.address, y.phoneNumber);
console.log (y.skilss.codingMarks);


// Key can also be given as string 
let car = {

   "suv car": "Thar",
   price : 200,
   quantity: 2,
   // the keyboard this means that it is belong to this object only
   onRoadPrice( ){
      return this.price +100;
   }

};

console.log(car["suv car"]); 

/// delete functionality for item in the objects
// delete car.price;

console.log(car);

/// update functionality for item in the objects (to add a new key and value in the objects )
car['modalYear'] = 2024;

console.log(car); 

/// edit the item in the objects 
car['quantity'] = 12;

console.log(car);

console.log("The cost of the car is "+ car.onRoadPrice());

/// user objects 

let user = {
   name: "Imran",
   
};

console.log(user.name);

user.name = "Imran B";
console.log(user.name);

delete user.name;




 