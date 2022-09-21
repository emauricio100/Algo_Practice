/*
You need to create a function that will validate if given parameters are valid geographical coordinates.

Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.

Coordinates can only contain digits, or one of the following symbols (including space after comma) __ -, . __

There should be no space between the minus "-" sign and the digit after it.

Here are some valid coordinates:

-23, 25
24.53525235, 23.45235
04, -23.234235
43.91343345, 143
4, -3
And some invalid ones:

23.234, - 23.4234
2342.43536, 34.324236
N23.43345, E32.6457
99.234, 12.324
6.325624, 43.34345.345
0, 1,2
0.342q0832, 1.2324
*/
function isValidCoordinates(coordinates){
    const split = coordinates.split(",")
    if(Math.abs(split[0] > 90)|| Math.abs(split[1]) > 180) return false
    if(coordinates.match(/[A=Za-z]/gi)) return false
    if(split.length !== 2) return false
    if(coordinates.match(/\ - /gi)) return false
    let count = 0
    if(split[0].split('.').length > 2 || split[1].split('.').length > 2) return false
    if(split[0].indexOf("-") > 1 || split[1].indexOf("-") > 1) return false
    return true
    }