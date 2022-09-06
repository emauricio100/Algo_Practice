/* 

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"

*/



function formatDuration (seconds) {
    // Complete this function
    if(seconds === 0){
      return 'now'
    }
    let countDown = seconds
    let sec = 0
    let min = 0
    let hr = 0
    let day = 0
    let yr = 0
    const format = []
  
  if(countDown >= 31536000){
    yr += Math.floor(countDown/31536000)
    countDown = countDown - (Math.floor(countDown/31536000) * 31536000)
     if(yr > 1){
       format.push(`${yr} years`)
     } 
     if(yr === 1){
       format.push(`${yr} year`)
     }
  }
  
  if(countDown >= 86400){
    day += Math.floor(countDown/86400)
    countDown = countDown - (Math.floor(countDown/86400) * 86400)
    numberL = countDown.toString().length
  
    if(day > 1){
       format.push(`${day} days`)
     }
     if(day === 1){
       format.push(`${day} day`)
     }
  }
  
  if(countDown >= 3600){
    hr += Math.floor(countDown/3600)
    countDown = countDown - (Math.floor(countDown/3600) * 3600)
    numberL = countDown.toString().length
  
    if(hr > 1){
       format.push(`${hr} hours`)
     } 
     if(hr === 1){
       format.push(`${hr} hour`)
     }
  }
  if(countDown >= 60){
    min += Math.floor(countDown/60)
    countDown = countDown - (Math.floor(countDown/60) * 60)
  
    if(min > 1){
       format.push(`${min} minutes`)
     } 
     if(min === 1) {
       format.push(`${min} minute`)
     }
  }
  if(countDown < 60){
    sec += countDown;
    
    if(sec > 1){
       format.push(`${sec} seconds`)
     }
     if(sec === 1) {
       format.push(`${sec} second`)
     }
  }
  
  
  
  if(format.length > 2){
  return format.splice(0, format.length-1).join(", ") + ' and ' + format[format.length-1]
  
  }
  if (format.length === 2){
    return format.join(" and ")
  }
  if(format.length === 1){
    return format.join("")
  }
  
  }