/* 
Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example test case:
56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
*/


function orderWeight(strng) {
    // your code
    const nums = strng.split(' ')

    const numm = []
    for(let i = 0; i < nums.length; i++){
   numm.push(nums[i].toString().split('').map(Number)) 
    }
    const sorts = numm.sort((a,b) => {return a.length - b.length})

  const long = numm.sort(function (a, b) {
    return a.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0) - b.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  0) || a > b || -(a < b)
})


const final = [];
for(let i = 0; i < long.length; i++){
  final.push(long[i].join(""))
  }
  return final.join(" ")
}