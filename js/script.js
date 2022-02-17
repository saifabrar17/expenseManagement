
// declaring a function for getting value as number
function getParsedValueById(idName) {
    let parsedValue = parseInt(document.getElementById(idName).value);
    return parsedValue;
}

// declaring function to get elements by id
function getElement(idName) {
    let element = document.getElementById(idName);
    return element;
}

function calculatingExpense() {
    let incomeAmount = getParsedValueById("input-income");
    let foodCost = getParsedValueById("input-food");
    let rentCost = getParsedValueById("input-rent");
    let clothCost = getParsedValueById("input-cloths");
    let totalExpense = getElement("expense-total");
    let balanceAfterExpense = getElement("balance-remaining");

    // total cost
    let totalCost = foodCost + rentCost + clothCost;

    //validity check
    if (isNaN(incomeAmount) || incomeAmount < 0) {
        alert("please provide a positiv income value");
    } else if (isNaN(foodCost) || foodCost < 0) {
        alert("please provide a positiv food value");
    } else if (isNaN(rentCost) || rentCost < 0) {
        alert("please provide a positiv rent value");
    } else if (isNaN(clothCost) || clothCost < 0) {
        alert("please provide a positiv cloth value");
    } else if (incomeAmount < totalCost) {
        alert("surpassed your income");
    }
    else {
        totalExpense.innerText = totalCost;
        balanceAfterExpense.innerText = incomeAmount - totalCost;
    }
}


function calculateSavings() {

    let balanceAfterExpense = getElement("balance-remaining");
    let totalExpense = getElement("expense-total");
    let incomeAmount = getParsedValueById("input-income");
    let savingPercentage = getParsedValueById("input-saving-percentage");
    let savingAmount = getElement("saving-amount");
    let remainBalance = getElement("final-remaining");

    let savings = (savingPercentage / 100) * incomeAmount;
    let finalBalance = incomeAmount - (savings + parseInt(totalExpense.innerText));

    if (isNaN(savingPercentage) || savingPercentage < 0) {
        alert("percentage cant be negative");
    } else if (savings > parseInt(balanceAfterExpense.innerText)) {
        alert("you cant save mote than you hbve");
    } else {
        savingAmount.innerText = savings;
        remainBalance.innerText = finalBalance;
    }

}