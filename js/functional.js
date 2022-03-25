function getInputs(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    inputField.value = '';
    return value;

}

function updateField(fieldId, amount) {
    const totalField = document.getElementById(fieldId);
    const previousTotal = totalField.innerText;
    const currentTotal = parseFloat(previousTotal);
    const newTotal = currentTotal + amount;
    totalField.innerText = newTotal;
    return newTotal;

}

function updateBalance(amount, isAdding) {
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceText = totalBalance.innerText;
    const currentBalance = parseFloat(previousBalanceText);
    let newBalance;

    if (isAdding === true) {

        newBalance = currentBalance + amount;

    } else {
        newBalance = currentBalance - amount;
    }


    totalBalance.innerText = newBalance;

}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmout = getInputs("deposit-input");
    if (depositAmout > 0) {
        updateField('deposit-total', depositAmout);
        updateBalance(depositAmout, true);
    }

})
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmout = getInputs("withdraw-input");
    if (withdrawAmout > 0) {
        updateField('withdraw-total', withdrawAmout);
        updateBalance(withdrawAmout, false);
    }
})