
/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/


function solution(str){
    if(str.length % 2 !== 0){
      str += "_"
    }
   let arr = ''
   for(let i = 0; i < str.length; i++){
     arr += str[i]
     if(i  % 2 !== 0 && i !== str.length-1){
       arr += " "
     } 
   }
   return str.length === 0? []: arr.split(" ")
 }