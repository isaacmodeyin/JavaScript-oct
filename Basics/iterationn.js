let target = 50
let customerBalance = 57
let collectedAmount = 0
const maxAmountPerInterval = 5
let count = 0

let transactions = []

while(collectedAmount<target){
    if(customerBalance>0){
        let transactionAmount = 0;
        if(customerBalance>=maxAmountPerInterval){
            transactionAmount= maxAmountPerInterval
        }else{
            transactionAmount = customerBalance
        }
        customerBalance -= transactionAmount
        collectedAmount += transactionAmount

        transactions.push({
            'Transaction No.': count + 1,
            'Transaction Amount': transactionAmount,
            'Remaining Target': target - collectedAmount,
            'Remaining Balance': customerBalance
        })
    }else{
        console.log("No Funds")
    }
    count++
    if(count>10){
        break
    }
}

console.table(transactions)
