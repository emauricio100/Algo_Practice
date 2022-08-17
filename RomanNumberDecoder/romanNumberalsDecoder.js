


function solution (roman) {
    // complete the solution by transforming the 
    // string roman numeral into an integer
  const symbol = {
    'I':1, 
    "V":5, 
    "X":10,
    "L":50, 
    "C":100, 
    "D":500, 
    "M":1000
  }
  let number = 0
  for(let i = 0 ; i < roman.length; i++){
    if(symbol[roman[i]] < symbol[roman[i+1]]){
      number -= symbol[roman[i]]
    } else {
      number += symbol[roman[i]]
    }
  }
  return number
  }