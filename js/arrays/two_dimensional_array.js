let matrix = [
  [1, 2],
  [4, 3],
  [6, 7],
];
console.log(matrix.unshift("2,4"));
console.log(matrix.length);

console.log(matrix[2]);

for (matrixValues of matrix){
    console.log(matrixValues);
}
   