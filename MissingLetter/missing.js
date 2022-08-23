/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
*/
function findMissingLetter(array)
{
  const lower = array.join("").toLowerCase().split("")
  const alpha = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]
  let total = 0
  for(let i = 0; i < lower.length; i++){
    if(alpha.indexOf(lower[i]) + 1 !== alpha.indexOf(lower[i+1])){
      total += alpha.indexOf(lower[i])
      break
    }
}
  if(array[0] === array[0].toUpperCase()){
    return alpha[total + 1].toUpperCase()
  }
  return alpha[total + 1]
}