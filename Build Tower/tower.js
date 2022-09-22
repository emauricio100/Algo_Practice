/*
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/
function towerBuilder(nFloors) {
    let space = []
    let star  = []
    let tower = []
    for(let i =1; i <=nFloors; i++){
      space = " ".repeat(nFloors -i)
      star = "*".repeat((i*2)-1)
      tower.push(space.concat(star).concat(space))
    }
    return tower
  }