/*
Task

Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

Example:

n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
*/

function pascalsTriangle(n) {
    let pascal = [];
    for(let i = 0; i < n; i++){
      pascal[i] = [];
      pascal[i][0] = pascal[i][i] = 1;
      for(let j = 1; j < i; j++){
        pascal[i][j] = pascal[i-1][j] + pascal[i-1][j-1]; 
      }
    }
  return pascal.flat()
}