/* 
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

example:
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

*/

function validBraces(braces){
    //TODO 
    let total = 0
           
    for (let i = 0; i < braces.length; i++){
      switch(braces[i]){
          case '(':
            total++
            break;
          case '{':
            total++
            break;
          case '[':
            total++
            break; 
          case ')':
            total--
            break;
          case '}':
            total--
            break;
          case ']':
            total--
            break; 
      }
      if(braces[i] === '(' && braces[i+1] === ']' || braces[i] === '(' && braces[i+1] === '}'){
        return false 
      }
      if(braces[i] === '[' && braces[i+1] === ')' || braces[i] === '[' && braces[i+1] === '}'){
        return false 
      }
      if(braces[i] === '{' && braces[i+1] === ']' || braces[i] === '{' &&  braces[i+1] === ')'){
        return false 
      }
      if(total < 0){
        return false
      }
      }
      return total == 0
    }