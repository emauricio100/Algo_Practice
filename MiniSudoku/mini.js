/*
Mr Crank has assigned everyone in your class a Mini Sudoku puzzle to solve. Nobody is allowed to leave until the puzzles are completed, even though it is a Friday afternoon and the sun is shining. You decide that if you can come up with function to solve any Mini Sudoku, it would be a great way to test you coding skills and become the most popular kid in your class.

Here is an example of a partially filled out mini sudoku, the zeros represent blank spaces. Each blank space must be filled in so that every column contains the numbers 1-4 and every row contains the numbers 1-4. The 2x2 blocks should also contain the numbers 1-4.

                        [[0, 0, 2, 0], 
                         [0, 3, 0, 4],
                         [3, 0, 4, 0],
                         [0, 2, 0, 0]],
                         
you must come up with a function which will correctly fill out ANY Mini Sudoku board. The test cases will only include puzzles with one possible solution or they will be impossible.

if the sudoku is unsolvable the function should return "This sudoku is unsolvable!"
*/

function solve(board){
  const isValid = (grid, row, col, number) => {
    for(let i = 0; i < 4; i++){
      if(grid[i][col] === number) return false
    }
    for(let i = 0; i < 4; i++){
      if(grid[row][i] === number) return false
    }
    let miniRow = row - (row % 2)
    let miniCol = col - (col % 2)
    for(let i = miniRow; i < miniRow + 2; i++){
      for(let j = miniCol; j < miniCol + 2; j++){
        if(grid[i][j] === number) return false
      }
    }
    return true
  }
  
  const solver = (grid) => {
  for(let row = 0; row < grid.length; row++){
    for(let col = 0; col < grid.length; col++){
      if(grid[row][col] === 0){
        for(let guess = 1; guess < 5; guess++){
          if(isValid(grid, row, col, guess)){
            grid[row][col] = guess
            if(solver(grid)){
              return true
            }
            grid[row][col] = 0
          }
        }
        return false
      }
    }
  }
    return true
  }
  
  if(solver(board)){
    for(let i =0; i < board.length; i++){
      if(board[i].reduce((a,b) => a+b, 0) !== 10) return 'This sudoku is unsolvable!'
    }
    return board
  }else{
    return 'This sudoku is unsolvable!'
  }
  
  }