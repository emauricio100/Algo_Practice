/*
A friend of mine takes the sequence of all numbers from 1 to n (where n > 0).
Within that sequence, he chooses two numbers, a and b.
He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
Given a number n, could you tell me the numbers he excluded from the sequence?
The function takes the parameter: n (n is always strictly greater than 0) and returns an array or a string (depending on the language) of the form:

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or or [{a, b}, ...]
with all (a, b) which are the possible removed numbers in the sequence 1 to n.

[(a, b), ...] or [[a, b], ...] or {{a, b}, ...} or ... will be sorted in increasing order of the "a".
*/

function removeNb (n) {
    let sum = (n * (n+1)) / 2
    let cheating = []
    for(let i = 1; i <= n; i++){
      let k = Math.floor((sum - i) / (i+1))
      if(k <= n && k * i === sum-(i+k)){
        cheating.push([i,k])
      }
      }
    return cheating
  }