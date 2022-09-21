/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/
function incrementString (strng) {
    if(strng.length === 0)  return '1'
    const seperate = strng.split('')
    let end = seperate.length-1
    if(parseInt(strng[end]) < 9){
      seperate[end] = parseInt(seperate[end]) + 1
      return seperate.join("")
    }
    if(!seperate[end].match(/\d+/)){
      seperate.push('1')
      return seperate.join("")
      }
    const arr = []
    while(parseInt(seperate[end]) + 1 === 10){
      seperate.pop()
      arr.push(0)
      end--
    }
    if(seperate[end].match(/\d+/) === null){
      arr.unshift(1)
      return seperate.concat(arr).join("")
    }
    seperate[end] = parseInt(seperate[end]) + 1
    return seperate.concat(arr).join("")
  }