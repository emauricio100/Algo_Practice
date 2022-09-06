
/*
Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

add("123", "321"); -> "444"
add("11", "99");   -> "110"

*/


function add(a, b) {
    const sumFunction = (one, two) => {
      let sum = ''
      let remainder = 0
      const differnce = two.length - one.length
      for(let i = one.length -1; i >= 0; i--){
        let add = Number(one.charAt(i))%10 + Number(two.charAt(i+differnce))% 10 + remainder
        
        if(add >= 10){
          sum = (add % 10) + sum
          remainder = Math.floor(add/10)
        } else{
          sum = add + sum
          remainder = 0
        }
      }
      if(remainder){
        sum = remainder + sum
      }
      return sum
    }
    if(a.length >= b.length){
      return sumFunction(a,b)
    } else {
      return sumFunction(b,a)
    }
  }