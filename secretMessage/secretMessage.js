// returns a secret message by finding all duplicates in a string in order

function findSecretMessage(paragraph) {
    // what's the message?
    const spt = paragraph.toLowerCase().replace(/[$&+,:;=?@#|'<>.-^*()%!]/g, "").split(" ")
    const nonDup = []
    let secret = []
    for(let i = 0; i < spt.length; i++){
      if(!nonDup.includes(spt[i])){
        nonDup.push(spt[i])
      } else if(!secret.includes(spt[i])) {
        secret.push(spt[i])
        }
      }
  return secret.join(" ")
  }