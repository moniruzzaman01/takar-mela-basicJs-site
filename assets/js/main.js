const totalExpensesField = document.getElementById('total-expenses')
const balanceField = document.getElementById('balance')

const calculateBtn = document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = document.getElementById('income').value
    // add
    const food = parseInt(document.getElementById('food').value)
    const rent = parseInt(document.getElementById('rent').value)
    const cloth = parseInt(document.getElementById('clothes').value)
    const expenses=food+rent+cloth

    // expenses set
    totalExpensesField.innerText = expenses

    // balance set
    balanceField.innerHTML = income - expenses
})
document.getElementById('savings-btn').addEventListener('click', function () {
    const income = document.getElementById('income').value

    const savingsRateField = document.getElementById('savings')
    const savingAmountField = document.getElementById('saving-amount')
    const remainingBalanceField = document.getElementById('remaining-balance')

    const savingsRate = parseInt(savingsRateField.value)

    const savingAmount = income * (savingsRate / 100)
    savingAmountField.innerText = savingAmount;

    remainingBalanceField.innerText = parseInt(balanceField.innerText) - savingAmount

})












const errorMessage1 = document.getElementById('message-1').innerText
const errorMessage2 = document.getElementById('message-2').innerText
const errorMessage3 = document.getElementById('message-3').innerText