/*

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples

"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/


function toCamelCase(str){
    if(str.length === 0){
      return str
    }
    let words
    if(str.includes("-")){
      words = str.split("-")
    }else{
      words = str.split("_")
    }
  for(let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].substr(1)
  }
    if(str[0] !== str[0].toUpperCase() === true){
      words[0] = words[0].toLowerCase()
    }
  return words.join("")
  }