/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples:
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/

function pigIt(str){
    //Code here
    const split = str.split(" ")
    let pig = ""
    for(let i = 0 ; i < split.length; i++){
      if(split[i].match(/[A-Za-z]/)){
        pig +=  split[i].substr(1) + split[i][0] +"ay" + " "
      } else {
        pig += split[i]
      }
      
    }
  return pig.trim()
  }