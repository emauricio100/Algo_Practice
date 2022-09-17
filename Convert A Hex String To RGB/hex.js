/*
When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
Returns a Map<String, int> with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

Example

"#FF9933" --> {r: 255, g: 153, b: 51}
*/
function hexStringToRGB(hexString) {
    const insensitive = hexString.toUpperCase()
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
      "A":10, 
      "B":11, 
      "C":12, 
      "D":13, 
      "E":14, 
      'F': 15
    }
    const arr = []
    for(let i = 1; i < insensitive.length; i++){
        if(i % 2){
          arr.push((value[insensitive[i]] * 16) + value[insensitive[i+1]])
        }
    }
    return {r:arr[0], g:arr[1], b:arr[2]}
  }