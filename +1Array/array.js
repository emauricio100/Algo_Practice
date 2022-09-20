/*
Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples

For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

[4, 3, 2, 5] would return [4, 3, 2, 6]
*/
function upArray(arr){
    const check1 = arr.filter((x) => x < 0)
    const check2 = arr.filter((x) => x > 9)
    if(check1.length > 0 || check2.length > 0) return null
    if(arr.length === 0) return null
    let k = arr.length-1
    const update = []
    for(let i = 0; i < arr.length; i++){
      if(arr[k] + 1 <= 9){
        arr[k] = arr[k] + 1
        return arr
      }
    }
    while(arr[k] + 1 === 10){
      update.push(0)
      k--
      arr.pop()
    }
    if(arr.length === 0){
      update.push(1)
      update.reverse()
      return update
    }
    arr[k] = arr[k] + 1
    let i = 0
    while( i < update.length){
      arr.push(0)
      i++
    }
    return arr
  }