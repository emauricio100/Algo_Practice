/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"


*/
function createPhoneNumber(numbers){
    let string = ''
    if(numbers > 10){
      return "invalid length"
    }
    for(let i = 0; i < numbers.length; i++){
      if(numbers[i] < 0 || numbers[i] > 9){
        return "invalid numbers"
      } 
      if(string.length === 0){
        string += '('
      } 
      if(string.length === 4){
        string += ')'
      } 
      if(string.length == 5){
        string += " "
      } 
      if(string.length === 9){
        string += '-'
        }
        string += numbers[i]
      
    }
  return string
  }