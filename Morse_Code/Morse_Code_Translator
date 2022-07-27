function decode(str) {
    // implement morse decode here
    if(str.length === 0){
      return ''
    }
    const morse = {
      ".-":'a',
      "....":'h',
      "---":'o',
      "..-":'u',
      ".----":1,
      "-....":6,
      "-...":'b',
      "..":'i',
      ".--.":'p',
      "...-":'v',
      "..---":2,
      "--...":7,
      "-.-.":'c',
      ".---":'j',
      "--.-":'q',
      ".--":'w',
      "...--":3,
      "---..":8,
      "-..":'d',
      "-.-":'k',
      ".-.":'r',
      "-..-":'x',
      "....-":4,
      "----.":9,
      ".":'e',
      ".-..":'l',
      "...":'s',
      "-.--":'y',
      ".....":5,
      "-----":0,
      "..-.":'f',
      "--":'m',
      "-":'t',
      "--..":'z',
      "--.":'g',
      "-.":'n'
    }
    const morseKeys = Object.keys(morse)
    const strSplit = str.split(" ")
    const morseDecoded = []
    for(let i = 0; i < strSplit.length; i++){
      if(morseKeys.includes(strSplit[i])){
        morseDecoded.push(morse[strSplit[i]])
      } else{
        morseDecoded.push(" ")
      }
    }
    return morseDecoded.join("")
  }