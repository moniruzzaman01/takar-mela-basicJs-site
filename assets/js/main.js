function getExpenses() {
    // i don't find any benefit to make these parameter dynamic. thats why i don't try to make them dynamic
    const foodAmount = parseFloat(document.getElementById('food').value)
    const rentAmount = parseFloat(document.getElementById('rent').value)
    const clothAmount = parseFloat(document.getElementById('clothes').value)
    if (isNaN(foodAmount) || isNaN(rentAmount) || isNaN(clothAmount)) {
        return error(1)
    } else if (foodAmount < 0 || rentAmount < 0 || clothAmount < 0) {
        error(3)
    } else {
        error()
        return (foodAmount + rentAmount + clothAmount)
    }
}

function getSub(value1, value2) {
    return (parseFloat(value1) - parseFloat(value2))
}

function error(value) {
    const errorMessage1 = document.getElementById('message-1')
    const errorMessage2 = document.getElementById('message-2')
    const errorMessage3 = document.getElementById('message-3')
    const errorMessage4 = document.getElementById('message-4')
    if (value == 1) {
        errorMessage1.style.display = 'block'
        errorMessage2.style.display = 'none'
        errorMessage3.style.display = 'none'
        errorMessage4.style.display = 'none'
    } else if (value == 2) {
        errorMessage1.style.display = 'none'
        errorMessage2.style.display = 'block'
        errorMessage3.style.display = 'none'
        errorMessage4.style.display = 'none'
    } else if (value == 3) {
        errorMessage1.style.display = 'none'
        errorMessage2.style.display = 'none'
        errorMessage3.style.display = 'block'
        errorMessage4.style.display = 'none'
    } else if (value == 4) {
        errorMessage1.style.display = 'none'
        errorMessage2.style.display = 'none'
        errorMessage3.style.display = 'none'
        errorMessage4.style.display = 'block'
    } else {
        errorMessage1.style.display = 'none'
        errorMessage2.style.display = 'none'
        errorMessage3.style.display = 'none'
        errorMessage4.style.display = 'none'
    }
}

const balance = document.getElementById('balance')
document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = document.getElementById('income').value
    const expenses = getExpenses()
    if (isNaN(income)) {
        error(1)
    } else if (income < 0) {
        error(3)
    } else if (income < expenses) {
        error(2)
    } else {
        // expenses set
        document.getElementById('total-expenses').innerText = expenses
        // balance set
        balance.innerText = getSub(income, expenses)
    }
})
document.getElementById('savings-btn').addEventListener('click', function () {
    const income = document.getElementById('income').value
    const savingAmountField = document.getElementById('saving-amount')
    const remainingBalanceField = document.getElementById('remaining-balance')
    const savingsRate = parseInt(document.getElementById('savings').value)
    const savingAmount = income * (savingsRate / 100)
    if (balance.innerText != 0) {
        if (isNaN(savingsRate)) {
            error(1)
        } else if (savingsRate < 0) {
            error(3)
        } else if (savingAmount > balance.innerText) {
            error(4)
        } else {
            // savings count
            // savings amount set
            savingAmountField.innerText = savingAmount;
            // remaining balance set
            remainingBalanceField.innerText = getSub(balance.innerText, savingAmount)
        }
    }


})
// clear the previous value of input
const inputs = document.getElementsByTagName('input')
for (const input of inputs) {
    input.addEventListener('click', function () {
        this.value = ''
    })
}