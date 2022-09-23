/*
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/
function expandedForm(num) {
    const split = num.toString().split("").map(Number).reverse()
    const expanded = []
    for(let i =0; i < split.length; i++){
      if(i === 0){
       if(split[i] > 0){
         expanded.push(split[i])
       }
      }
      if(split[i] === 0){
        continue
      }else if(i !== 0){
        expanded.push(split[i] * (10**i))
      }
    }
    return expanded.reverse().join(" + ")
  }