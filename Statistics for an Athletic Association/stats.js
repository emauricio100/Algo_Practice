/*
You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by ,  or ,.

To compare the results of the teams you are asked for giving three statistics; range, average and median.

Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.

Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

Your task is to return a string giving these 3 values. For the example given above, the string result will be

"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`

where hh, mm, ss are integers (represented by strings) with each 2 digits.

Remarks:

if a result in seconds is ab.xy... it will be given truncated as ab.
if the given string is "" you will return ""
*/
function stat(strg) { 
    const nums = strg.replace(/\,/gi,"").split(" ")
    const time = []
    
    for(let i =0; i < nums.length; i++){
      let times = 0
      let k = nums[i].split("|").map(Number)
      times += (k[0] * 3600)
      times += (k[1] * 60)
      times += k[2]
      time.push(times)
    }
    time.sort((a,b) => {return a-b})

    const range = Math.max(...time) - Math.min(...time)
    const mean = time.reduce((a,b) => a + b,0) / time.length
    const mid = time.length / 2
    let median

    if(mid === parseInt(mid)){
      median = (time[mid-1] + time[mid]) / 2
    } else {
      median = time[Math.round(mid)-1]
    }
    if(time.includes(NaN)) return ""

    const stats = (n) => {
      const time = []
      const hr = parseInt(n / 3600)
      const mins = parseInt((n % 3600) / 60)
      const sec = parseInt(n % 60)
      if(hr <= 9){
        time.push(`0${hr}`)
      }else{
        time.push(hr)
      }
      if(mins <= 9){
        time.push(`0${mins}`)
      }else{
        time.push(mins)
        }
      if(sec <= 9){
        time.push(`0${sec}`)
      }else{
        time.push(sec)
      }
      return time.join("|")
    }

    return `Range: ${stats(range)} Average: ${stats(mean)} Median: ${stats(median)}`
  }