/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.


*/


function arrayDiff(a, b) {
    const finalArr = []
    for(let i = 0; i < a.length; i++){
      if(!b.includes(a[i])){
        finalArr.push(a[i])
      }
    }
   if(a.length === 0){
     return []
   }
   if(b.length === 0){
     return a
   }
    return finalArr
  }