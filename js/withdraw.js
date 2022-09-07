// / **
// -1: add event handler with the withdraw button.
// -2: get the withdraw amount from the withdraw input field.
// -2.5: also make sure to convert the input into a number by using parseFloat.
// -3: Get previous withdraw total.
// -4: calculate total withdraw amount.
// -4.5:set total withdraw amount.
// -5: Get the previous balance total
// -6: Calculate new balance total.
// -6.5: Set new balance total

// -7: Clear the withdraw field

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
//    step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString)
    

    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previousWithdrawTotalString = withdrawTotalElement.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)
    
    // step-4
    const currentWithdrawtotal = previousWithdrawTotal + newWithDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawtotal;

    // step-5
    const balanceTotalElement = document.getElementById('balance-total')
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousbalanceTotal = parseFloat(previousBalanceTotalString)

    // step-6
    const newBalanceTotal = previousbalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal
   

    // step-7
    withdrawField.value = " ";

})