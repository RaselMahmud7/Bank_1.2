document.getElementById("deposit-button").addEventListener('click', function () {
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmoutText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmoutText);
    console.log(newDepositAmount);


    const depositTotal = document.getElementById("deposit-total");


    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const totalDeposit = parseFloat(previousDepositAmount + newDepositAmount);
    depositTotal.innerText = totalDeposit;




    //update balance 

    const balanceTotal = document.getElementById("total-balance");
    console.log(balanceTotal);
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    console.log(previousBalanceTotal);
    const availableBalance = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = availableBalance;


    depositInput.value = '';



})


// // withdraw

document.getElementById("withdraw-button").addEventListener('click', function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const newWithdrawAmoutText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmoutText);
    // console.log(newWithdrawAmount);

    const withdrawTotal = document.getElementById("withdraw");


    const previousWithdrawAmountText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
    const totalWithdraw = parseFloat(previousWithdrawAmount + newWithdrawAmount);
    withdrawTotal.innerText = totalWithdraw;


    //update balance 

    const balanceTotal = document.getElementById("total-balance");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);


    const currentBalance = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = currentBalance;

    withdrawInput.value = '';

})
