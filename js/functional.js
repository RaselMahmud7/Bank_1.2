function getInputs(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    inputField.value = '';
    return value;

}

function getInnerTextValue(fieldId) {
    const innerTextField = document.getElementById(fieldId);
    const previousTotal = innerTextField.innerText;
    const value = parseFloat(previousTotal);
    return value;
}

function updateField(fieldId, amount) {

    const currentTotal = getInnerTextValue(fieldId);
    const newTotal = currentTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;

}

function updateBalance(amount, isAdding) {
    const currentBalance = getInnerTextValue('total-balance')
    let newBalance;

    if (isAdding == true) {

        newBalance = currentBalance + amount;

    } else {
        newBalance = currentBalance - amount;
    }


    document.getElementById('total-balance').innerText = newBalance;

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
    const balance = getInnerTextValue('total-balance');

 if (withdrawAmout <= 0) {
     alert('Please enter a valid withdraw amount')
 }
    else if (withdrawAmout > 0 && withdrawAmout > balance) {
        alert("Your balance is lower than Withdraw Amount")

    }
    
    else {
        updateField('withdraw-total', withdrawAmout);
        updateBalance(withdrawAmout, false);
    }

})