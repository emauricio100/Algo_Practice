/*

*/
function decipherThis(str) {
    const split = str.split(" ")
    const translate = []
    let k 
    for(let i = 0; i < split.length; i++){
      if(split[i].match(/[A-Za-z]/gi) && split[i].match(/\d+/)){
        k = split[i].match(/[A-Za-z]/gi)
        k.unshift(String.fromCharCode([split[i].match(/\d+/)]))
        if(k.length > 2){
          let a = k[1]
          k[1] = k[k.length-1]
          k[k.length-1] = a
        }
        translate.push(k.join(""))
        k = ''
        }else{
          translate.push(String.fromCharCode([split[i].match(/\d+/)]))
        }
      }
    return translate.join(" ")
  };