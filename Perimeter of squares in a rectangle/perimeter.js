/*
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80 
The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.

perimeter(5)  should return 80
perimeter(7)  should return 216
*/
function perimeter(n) {
    const fib = n => {
      const arr = [1,1]
      if(n === 1 || n == 0){
        return [1]
      }
      for(let i = 2; i < n; i++){
        arr[i] = arr[i-2] + arr[i-1]
      }
      return arr
    }
    const peri = fib(n+1).reduce((a,b) => a+b,0)
    return peri * 4
 }