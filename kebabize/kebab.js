/*
Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters
*/
function kebabize(str) {
    let kebab = ""
    for(let i= 0; i < str.length; i++){
      if(str[i] === str[i].toUpperCase() && !str[i].match(/\d+/)){
        if(kebab.length === 0){
          kebab += str[i]
        } else{
          kebab += '-'
          kebab += str[i]
        }
      } else{
        if(!str[i].match(/\d+/)) kebab += str[i]
      }
    }
    return kebab.toLowerCase()
  }