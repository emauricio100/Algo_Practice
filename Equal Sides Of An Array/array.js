/*

*/
function findEvenIndex(arr){
    let arrSum = arr.reduce((a,b) => a+b,0)
    let equalSum = 0
    for(let i =0; i < arr.length; i++){
      arrSum -= arr[i]
      if(equalSum === arrSum){
        return i
      }
      equalSum += arr[i]
    }
    return -1
  }