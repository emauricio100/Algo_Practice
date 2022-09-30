/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".

Examples

"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/
function balance(left,right){
    let leftTotal = 0
    for(let i =0; i < left.length; i++){
      if(left[i] === "!") leftTotal += 2
      if(left[i] === "?") leftTotal += 3
    }
    
    let rightTotal = 0
    for(let i =0; i < right.length; i++){
      if(right[i] === "!") rightTotal += 2
      if(right[i] === "?") rightTotal += 3
    }
    
    return rightTotal > leftTotal ? "Right": leftTotal > rightTotal ? "Left": "Balance"
  }