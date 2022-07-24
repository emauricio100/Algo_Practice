/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value

Example test cases: 
rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/
function rgb(r, g, b){
    // complete this function 
    const value = {
      0:0, 
      1:1,
      2:2, 
      3:3, 
      4:4, 
      5:5, 
      6:6, 
      7:7, 
      8:8, 
      9:9, 
      10:'A', 
      11:'B', 
      12:'C', 
      13:'D', 
      14:'E', 
      15: 'F'
    }
  const remainder1 = (r / 16)
  const remainder2 = (g / 16)
  const remainder3 = (b / 16)
  let first = (r / 16 ) - (remainder1 % 1)
  let second = (remainder1 % 1) * 16 
  let third = (g / 16 ) - (remainder2 % 1)
  let fourth = (remainder2 % 1) * 16
  let fifth = (b / 16 ) - (remainder3 % 1)
  let sixth = (remainder3 % 1) * 16 
  console.log(sixth)
  const hex = []
  if( r < 0){
    first = 0 
    second = 0
  } 
  if(g < 0 ){
    third = 0
    fourth = 0
  } 
  if( b < 0){
    fifth = 0
    sixth = 0
  }
  
  if( r > 255){
    first = 15
    second = 15
  } else {
    first = first 
    second = second
  }
  if( g > 255){
  third = 15
  fourth = 15
  } else {
    third = third
    fourth = fourth 
  }
  if(b > 255){
    fifth = 15
    sixth = 15
  } else {
    fifth = fifth 
    sixth = sixth 
  }
  
    hex.push(value[first])
    hex.push(value[second])
    hex.push(value[third])
    hex.push(value[fourth])
    hex.push(value[fifth])
    hex.push(value[sixth])
  
  
  
  const hexValue = hex.join("")
  return  hexValue
  
  }



