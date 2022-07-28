function solution(string) {
    let newStr = ''
     for(let i = 0; i < string.length; i++){
       if(string[i].toUpperCase() !== string[i]){
         newStr += string[i]
       } else {
         newStr += " " + string[i]
       }
     }
    return newStr
  }