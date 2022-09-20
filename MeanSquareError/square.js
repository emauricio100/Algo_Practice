/*
Complete the function that

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.
*/
var solution = function(firstArray, secondArray) {
    const add = (first, second) => {
      let add = []
      let start = 0
      while(start !== firstArray.length){
        add.push(Math.abs(first[start] - second[start]) ** 2)
        start++
      }
      return add
    }
    return add(firstArray, secondArray).reduce((a,b) => a+b, 0) / add(firstArray, secondArray).length
  }