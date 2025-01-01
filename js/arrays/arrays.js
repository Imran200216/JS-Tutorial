// meaning of arrays => list of items
/// the real data type of array is object
let schoolKit = new Array();

console.log(typeof schoolKit);

/// to add items in  an array
schoolKit = ["pencil", "bag", "watch"];

/// push keyword is used to add the elements in the array (It adds the data from the last indexes)
schoolKit.push("Chart paper");

/// unshift keyword is used to add the elements in the array (It is used to add the data from the first indexes)
schoolKit.unshift("Rubber");

/// pop keyword is used to remove the elements in the array from the last indexes
schoolKit.pop();

/// shift keyword is used to remove the elements in the array form the first indexes
schoolKit.shift();

console.log(schoolKit);

let veges = ["carrot", "beetroot"];
console.log(typeof veges);

/// we can print the specific item in the array using their indexes
console.log(veges[1]);

/// to access the all elements
for (schoolsThings of schoolKit) {
  console.log(schoolsThings);
}

/// in operator always returns the indexes not the values 
for (schoolsThings in schoolKit){
    console.log(schoolKit[schoolsThings]);
}

/// to find the length of the array 
console.log(schoolKit.length );
