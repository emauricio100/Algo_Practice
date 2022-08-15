/*
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9. 

Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise.

*/

function validSolution(board){
    const three_by_three_blocks = [];
  
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
      if(block[i].reduce((a,b) => a + b, 0) != 45) {
        return false
      }
    }
    return true
  }


