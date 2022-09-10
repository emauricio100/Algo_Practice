/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
*/
function inArray(array1,array2){
    const reg = new RegExp(array1.sort().join("|"), 'gi')
    const string = array2.join(" ")
    const match = string.match(reg)
    if(match === null || array1.length === 0){
      return []
    }
    const r = []
    for(let i =0; i < match.length; i++){
      if(!r.includes(match[i]) && match[i] !== ""){
        r.push(match[i])
      }
    }
   return r.sort()
  }