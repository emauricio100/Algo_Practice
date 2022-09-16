/*
I love Fibonacci numbers in general, but I must admit I love some more than others.

I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.

For example:

   nthFibo(4) == 2
Because 2 is the 4th number in the Fibonacci Sequence.
*/

function nthFibo(n) {
    const fib = n => {
      const arr = [0,1]
      for(let i = 2; i <=n; i++){
         arr[i] = arr[i - 2] + arr[i - 1]
      }
      return arr
    }
    const nth = fib(n)
    return  nth[n-1]
  }