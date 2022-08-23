/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/


function isPangram(string){
    const count = {}
    const match = string.match(/[A-Za-z]/gi)
    match.join("").toLowerCase().split("").sort().forEach(function (x) {count[x] = (count[x] || 0) + 1 })
    return Object.keys(count).length === 26
  }