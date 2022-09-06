/*Function decodeBits(bits), that should find out the transmission rate of the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words) 
and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them. Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot.

example:
1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011

is turned into  ···· · −·−−   ·−−− ··− −·· ·

then translated to "HEY JUDE"

*/


var decodeBits = function(bits){
    let bitToMorse = " "
    let binaryToMorse = " "
    const bitsSplit = bits.split("")
    
    
    if(bitsSplit.length === 1){
      bitToMorse += bitsSplit[0]
    }
    
    for(let i = 0 ; i < bitsSplit.length; i++){
      if(bitsSplit[i] === bitsSplit[i+1] && bitsSplit[i] === '1'){
        bitToMorse += bitsSplit[i]
      } else if (bitsSplit[i] === bitsSplit[i+1] && bitsSplit[i] === '0'){
        bitToMorse += bitsSplit[i] 
      } else if(bitsSplit[i] !== bitsSplit[i+1]){
        bitToMorse += bitsSplit[i] + " "
      }
    }
    const bitToMorseSplit = bitToMorse.trim().split(" ")
    let btms = bitToMorseSplit
    if(bitToMorseSplit[0] === '0' &&  bitToMorseSplit.length < 4){
      btms.shift()
    } else if (bitToMorseSplit[0] === '0000000' && bitToMorseSplit.length < 4){
      btms.shift()
    }
    
    
  for(let i = 0; i < btms.length; i++){
    if(btms[i].length % 3 !== 0 && btms[i].length % 7 !== 0 && btms[i] % .5 === 0){
      if(btms[i].indexOf('1') > -1 ){
        binaryToMorse += "."
      } else {
        binaryToMorse += ""
      }
    } else if(btms[i].length % 7 === 0){
      if(btms[i].indexOf("0") > -1){
        binaryToMorse += "  "
      } else {
        binaryToMorse += "."
      }
    } else if(btms[i].length % 3 === 0){
      if(btms[i].indexOf('1') > -1){
        if(btms[i] === '111' && btms.length < 3){
          binaryToMorse + '.'
        } else{
          binaryToMorse += "-"
        }
      } 
      else {
        binaryToMorse += " "
      }
    }
  } 
    if(binaryToMorse.trim().length === 0){
      return "."
    }
    return binaryToMorse.trim()
  }
  
  