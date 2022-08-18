/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 *  ... * N
*/

function zeros (n) {
    let trailingZeros = 0
    for(let i = 5; Math.floor(n/i) >= 1; i *= 5){
      trailingZeros += Math.floor(n / i)
    }
    return trailingZeros
  }
  