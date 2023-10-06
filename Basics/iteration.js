//“A JavaScript Program to Simulate Incremental Money Collection” the purpose of the code, which is to simulate a process of collecting a target amount from a customer’s balance in increments.

let target = 50
let customerBalance = 57
let collectedAmount = 0
const maxAmountPerInterval = 5
let count = 0


while (collectedAmount < target) {
    if (customerBalance > 0) {
        let transactionAmount = 0;
        if (customerBalance >= maxAmountPerInterval) {
            transactionAmount = maxAmountPerInterval
        } else {
            transactionAmount = customerBalance
        }
        customerBalance -= transactionAmount
        collectedAmount += transactionAmount
        console.log(`Transaction Amount: ${transactionAmount}`)
        console.log(`Target left: ${target - collectedAmount}`)
        //.table({collectedAmount: collectedAmount, Transaction})
    } else {
        console.log("No Funds")
    }
    count++
    if (count > 10) {
        break
    }
}
