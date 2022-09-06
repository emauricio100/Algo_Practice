/*
Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0  # no characters repeats more than once
"aabbcde" -> 2  # 'a' and 'b'
"aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1  # 'i' occurs six times
"Indivisibilities" -> 2  # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2  # 'a' and '1'
"ABBA" -> 2  # 'A' and 'B' each occur twice

*/
function duplicateCount(text){
  
    if(text.length === 0){
      return 0
    }
    
    let duplicateCounter = 0
    const notRepeating = []
    const repeating = []
    const textSplit = text.toLowerCase().split("")
    
    
    
    for(let i = 0; i < textSplit.length; i++){
      if(!notRepeating.includes(textSplit[i]) && textSplit[i] !== textSplit[i+1]){
        notRepeating.push(textSplit[i])
        } else{
          repeating.push(textSplit[i]) 
        }
    }
    
    const repeatingSorder = repeating.sort()
    for(let i = 0; i < repeatingSorder.length; i++){
      if(repeatingSorder[i] !== repeatingSorder[i+1]){
        duplicateCounter++
      }
    }
    
    
    return duplicateCounter
  }