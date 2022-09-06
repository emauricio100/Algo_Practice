
/*
The arguments are passed as strings.
The numbers may be way very large
Answer should be returned as a string
The returned "number" should not start with zeros e.g. 0123 is invalid
*/


function multiply(a, b){
    const product = Array(a.length+b.length).fill(0);
    for (let i = a.length; i--; null) {
      let carry = 0
      for (let j = b.length; j--; null) {
        product[1+i+j] += carry + a[i]*b[j]
        carry = Math.floor(product[1+i+j] / 10)
        product[1+i+j] = product[1+i+j] % 10
      }
      product[i] += carry
    }
    return product.join("").replace(/^0*(\d)/, "$1")
  }