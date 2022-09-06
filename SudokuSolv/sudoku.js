/*
Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

Sudoku rules:

Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

*/

function doneOrNot(board){
    const three_by_three_blocks = []
    
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        let blockList = []
        for (let k = 0; k < 3; k++) {
          for (let l = 0; l < 3; l++) {
            blockList.push(board[i + k][j + l])
          }
        }
        three_by_three_blocks.push(blockList);
      }
    }
    
    const block = three_by_three_blocks
    
    for(let i = 0; i < block.length; i++){
      if(block[i].reduce((a,b) => a+b, 0) !== 45){
        return 'Try again!'
      }
    }
    
    const colSum = board.reduce((a, b) => a.map((x, i) => x + b[i]))
    const rowSum = board.map(r => r.reduce((a, b) => a + b))
    
    for(let i = 0; i < 9; i++){
      if(colSum[i] !== 45 || rowSum[i] !== 45){
        return 'Try again!'
      }
    }
    return "Finished!"
  }