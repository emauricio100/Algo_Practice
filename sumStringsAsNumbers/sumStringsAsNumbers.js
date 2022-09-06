// iven the string representations of two integers, return the string representation of the sum of those integers.

function sumStrings(a,b) { 
    const one = BigInt(a)
    const two = BigInt(b)
    const sum = one + two
    return sum.toString()
    }