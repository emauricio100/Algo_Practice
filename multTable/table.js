/*
Your task, is to create NxN multiplication table, of size provided in parameter.

for example, when given size is 3:

1 2 3
2 4 6
3 6 9
for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
*/


multiplicationTable = function(size) {
    const mult = []
    let len = []
    for(let i=1; i <= size; i++){
      for(let k =1; k <= size; k++){
        len.push(i * k)
        if(len.length === size){
          mult.push(len)
          len = []
        }
      }
    }
    return mult
  }