// JSON => Java Script Object Notation

let userObj = {
  name: "imran",
  age: 21,
  skills: ["Flutter", "React", "Next Js"],
};

let userStringObj = '{ "name": "Imran", "age": 23}';

// to convert the normal object to json (String)
console.log(JSON.stringify(userObj));
console.log(typeof (JSON.stringify(userObj)));


// to convert the json(String) to normal object
console.log(JSON.parse(userStringObj));
console.log(typeof (JSON.parse(userStringObj)));

