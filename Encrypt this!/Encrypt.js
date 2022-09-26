/*
You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/
var encryptThis = function(text) {
    const split = text.split(" ")
    let encrypt = ''
    for(let i =0; i < split.length; i++){
      let k = split[i].split("")
      k[0] = split[i].charCodeAt(0)
      if(k.length > 2){
        let h = k[1]
        k[1] = k[k.length-1] 
        k[k.length-1] = h
      }
      encrypt += k.join("")
      encrypt += " "
    }
    return encrypt.trim()
  }