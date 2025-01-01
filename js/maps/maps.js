/// % the difference between map and object:
// In Object, key should only be in the datatype of string
// In Map, Key should not be any specified datatype

/// map

let map = new Map();

console.log(typeof map);

// to add the values in the map
map.set(1, "code io");
map.set(2, "error makes clever");

/// to find the size of the map
console.log("The size of the map is " + map.size);

/// to add in another way to add the values in map
map.set(3, "Imran").set(4, "Prathish");

console.log(map);

/// to read the data from the map
console.log(map.get(2));

/// to read the keys from the map
for (mapKeys of map.keys()) {
  console.log(mapKeys); 
}

/// to read the values from the map
for (mapValues of map.values()) {
  console.log(mapValues);
}

/// to confirm whether the key has a value in the map by using the "has" keyword and it returns the boolean values
console.log(map.has(2));

/// to delete the key and value in the map using the keyword "delete" and we have to specify the index of the item in the map
map.delete(2);

console.log(map);

/// to delete the map clearly using the keyword "clear" it deletes all the datas from the map
map.clear();
console.log(map);
