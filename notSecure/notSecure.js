/*
The string has the following conditions to be alphanumeric:
    At least one character ("" is not valid)
    Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
    No whitespaces / underscore
*/


function alphanumeric(string){
    const arr = ["[A-Za-z]","\d+"]
    const arr2 = [" ","_","!"]
    const reg = new RegExp(arr.join('|'), 'gi')
    const reg2 = new RegExp(arr2.join('|'), 'gi')
    if(string.match(reg2)){
      return false
    }
    if(string.match(reg)){
      return true
    }
  return false
  }