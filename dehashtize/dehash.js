/*
Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5'
*/
function dashatize(num) {
    const nums = Math.abs(num).toString().split("")
    if(nums.length === 1){
      return Math.abs(num).toString()
    }
    let dehash = ''
    for(let i = 0; i < nums.length; i++){
      if(parseInt(nums[i]) % 2){
        if(i === 0){
          dehash += nums[i]
          dehash += "-"
        }else if(i === nums.length-1 && !(parseInt(nums[i-1]) % 2)){
          dehash += '-'
          dehash += nums[i]
        }else if(i === nums.length-1 && parseInt(nums[i-1]) % 2){
          dehash += nums[i]
        }else if(!(parseInt(nums[i-1]) % 2)){
          dehash += '-'
          dehash += nums[i]
          dehash += "-"
        }else {
          dehash += nums[i]
          dehash += "-"
        }
      }else {
        dehash += nums[i]
      }
    }
    return dehash
  }