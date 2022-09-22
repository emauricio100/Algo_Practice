/*
DESCRIPTION:

You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
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