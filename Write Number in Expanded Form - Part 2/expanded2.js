/*
You will be given a number and you will need to return it as a string in expanded form
For example:

expanded_from(807.304); // Should return "800 + 7 + 3/10 + 4/1000"
expanded_from(1.24); // should return "1 + 2/10 + 4/100"
expanded_from(7.304); // should return "7 + 3/10 + 4/1000"
expanded_from(0.04); // should return "4/100"
*/
function expandedForm(num) {
    const split = num.toString().split('.')
    const integer = split[0] 
    const float = split[1]
    
    const expand = num =>{
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
      return expanded.reverse()
    }
    
    const expandDecimal = num =>{
      const split = num.toString().split("").map(Number)
      const expanded = []
      let numerator = 0
      let denominator = 1
      for(let i =0; i < split.length; i++){
        if(split[i] === 0){
          denominator *= 10
          continue
        } else{
          if(i === 0){
            numerator = split[i]
            denominator *= 10
            expanded.push(`${numerator}/${denominator}`)
          } else{
            numerator = split[i]
            denominator *= 10
            expanded.push(`${numerator}/${denominator}`)
        }
      }
        numerator = ''
    }
      return expanded
  }
    
    const large = expand(integer)
    const small = expandDecimal(float)
    
    return large.length === 0 ? small.join(" + "): large.concat(small).join(" + ")
  }