/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

// Return the output array, and ignore all non-op characters
function parse( data )
{
  const swim = ['i', 'd', 's', 'o']
  const reg = new RegExp(swim.join("|"),'gi')
  const ignore = data.match(reg)
  let total = 0
  const val = []
  for(let i = 0; i < ignore.length; i++){
    switch(ignore[i]){
        case 'i':
          total++
          break;
        case 'd':
          total--;
          break;
        case 's':
          total *= total
          break;
        case 'o':
          val.push(total)
          break
        }
  }
return val
}