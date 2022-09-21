/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/
function reverse(str){
    const split = str.split(" ")
    const rev = []
    for(let i =0 ; i < split.length; i++){
      if(i % 2){
        rev.push(split[i].split("").reverse().join(""))
      } else {
        rev.push(split[i])
      }
    }
    return rev.join(" ").trim()
  }