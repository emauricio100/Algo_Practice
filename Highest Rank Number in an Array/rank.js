/*
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/
function highestRank(arr){
    const count  = {}
    arr.forEach(function (x) {count[x] = (count[x] || 0) + 1})
    const max = Math.max(...Object.values(count))
    const keys = Object.keys(count)
    const largest = []
    for(let i =0; i < keys.length; i++){
      if(count[keys[i]] === max){
        largest.push(keys[i])
      }
    }
    return Math.max(...largest)
  }