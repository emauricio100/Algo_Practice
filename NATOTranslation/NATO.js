/*
Task

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

There are preloaded dictionary you can use, named NATO
The set of used punctuation is ,.!?.
Punctuation should be kept in your return string, but spaces should not.
Xray should not have a dash within.
Every word and punctuation mark should be seperated by a space ' '.
There should be no trailing whitespace
*/
function to_nato(words) {
    let translate = ''
    for(let i = 0; i < words.length; i++){
      if(NATO[words[i].toLowerCase()]){
        translate += NATO[words[i].toLowerCase()]
        translate += " "
      } else if(words[i] !== " "){
        translate += words[i]
        translate += " "
      }
    }
    return translate.trim()
  }