/*
Let us begin with an example:

A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. He wants to keep his old car until he can buy the secondhand one.

He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. Furthermore this percent of loss increases of 0.5 percent at the end of every two months. Our man finds it difficult to make all these calculations.

Can you help him?

How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

Parameters and return of function:

parameter (positive int or float, guaranteed) start_price_old (Old car price)
parameter (positive int or float, guaranteed) start_price_new (New car price)
parameter (positive int or float, guaranteed) saving_per_month 
parameter (positive float or int, guaranteed) percent_loss_by_month

nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)
*/

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let price = startPriceNew
    let save = 0
    let i = 0
    let loss = percentLossByMonth
    let decreaseOfOld = startPriceOld
    while(price >= decreaseOfOld + save){
      if((i + 1)  % 2 === 0 ){
        loss += 0.5
      }
      price *= (1-((loss) / 100))
      decreaseOfOld *= (1-((loss) / 100))
      save += savingperMonth
      i++
    }
    return startPriceOld - startPriceNew >= 0 ? [0, startPriceOld - startPriceNew]: [i, Math.round((decreaseOfOld + save)-price)]
  }