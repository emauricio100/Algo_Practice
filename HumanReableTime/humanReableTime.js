/*

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)



*/

function humanReadable (seconds) {
    let countDown = seconds
    let sec = 0
    let min = 0
    let hr = 0
    if(countDown >= 3600){
      hr += Math.floor(countDown / 3600)
      countDown -= (Math.floor(countDown / 3600) * 3600)
    }
    if(countDown >= 60){
      min += Math.floor(countDown / 60)
      countDown -= Math.floor(countDown / 60) * 60 
    }
    if(countDown < 60){
      sec += countDown
    }

    const time = []
    
    if(hr <= 9){
      time.push(`0${hr}`)
    } else{
      time.push(`${hr}`)
    }
    if(min <= 9){
      time.push(`0${min}`)
    } else{
      time.push(`${min}`)
    }
    if(sec <= 9){
      time.push(`0${sec}`)
    } else{
      time.push(`${sec}`)
    }
   return time.join(":").toString()
  }