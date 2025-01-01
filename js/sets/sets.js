let set = new Set();

console.log(typeof set);

/// to add the values in the set data type by using the "add keywords"
set.add("imran");
set.add("prathish");

/// or we can also add values
set.add("kiran").add("nandha");

console.log(set);

/// to read the values
for (setValues of set.values()) {
  console.log(setValues);
}

/// delete functionality
set.delete("kiran");

console.log("********************************");

/// to read the values
for (setValues of set.values()) {
  console.log(setValues);
}

console.log("********************************");

/// to check whether the value is present in the set
console.log(set.has("nandha"));

/// to clear all the datas in the js
set.clear();

console.log(set);

/// triva question
let phoneNumber = new Set();

phoneNumber.add("9762809231");

console.log(phoneNumber);

console.log(phoneNumber.size);
