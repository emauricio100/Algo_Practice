

function solve(board){
    // your code here
      const isItPossilbe = (x, y, n) => {
        for(let i = 0; i < 4; i ++){
            if(board[x][i] === n){
              return false
          }
        }
        for(let i = 0; i < 4; i++){
          if(board[x][i] == n){
            return false
          }
        }
        const xAxis = Math.floor(x/2) * 2
        const yAxis = Math.floor(x/2) * 2
        for(let i = 0; i < 2; i++){
          for(let k = 0; k < 2; k++){
            if(board[xAxis + i][yAxis + k] === n){
              return false
            }
          }
        }
        return true
      }
    const sol = () =>{
      for(let y = 0; y < 4; y++){
        for(let x = 0; x < 4; x++){
          if(board[y][x] === 0){
            for(let n = 1; n < 5; n++){
              if(isItPossilbe(x, y, n)){
                board[y][x] === n
                sol()
                board[y][x] === 0
              }
            }
            return 
          }
        }
      }
      }
    
      console.log(sol())
    
      }
      solve([[0, 0, 2, 0],
        [0, 3, 0, 4],
        [3, 0, 4, 0],
        [0, 2, 0, 0]])