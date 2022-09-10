/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

Valid inputs examples:

Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:

1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
*/
function isValidIP(str) {
    const spl = str.split(".")
    if(str === '' || str[0] === "." || str[str.length -1] === "."){
      return false
    }
    if(spl.length > 4 || spl.length < 4){
      return false
    }
    if(str.match(/[A-Za-z]/gi)){
      return false
    }
    if(str.match(/\n/gi) || str.match(/\,/gi) || str.match(/\""/gi)){
      return false
    }
    if(spl.includes("")){
      return false
    }
    for(let i = 0; i < spl.length; i++){
      if(parseInt(spl[i]) < 100 && spl[i][0] === '0' && spl[i].length > 1){
        return false
      }
      if(parseInt(spl[i]) > 255 || parseInt(spl[i]) < 0){
        return false
      }
      if(spl[i].includes(" ")){
         return false
         }
    }
    return true
  }