/*
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
In JavaScript: If you use Array.sort in your solution, you might experience issues with the random tests as Array.sort is not stable in the Node.js version used by CodeWars. This is not a kata issue.
*/
function longestRepetition(s) {
    if(s.length === 0) return ["", 0]
    const seperate = []
    let k = s[0]
    for(let i =0; i < s.length; i++){
      if(k === s[i]){
        seperate.push(k)
      } else {
        k = s[i]
        seperate.push("|")
        seperate.push(k)
      }
    }
    const joins = seperate.join("").split("|")
    let step = joins[0].length
    let index = 0
    for(let i =0; i < joins.length; i++){
      if(step < joins[i].length) step = joins[i].length, index = i
    }
    return [joins[index][0], step]
  }