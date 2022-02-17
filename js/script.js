// declaring a function for getting value as number
function getParsedValueById(id_name) {
    let parsedValue = parseInt(document.getElementById(id_name).value);
    return parsedValue;
}

// declaring function to get element by id for Displaying value to frontend
function pushElementTo(id_name) {
    let element = document.getElementById(id_name);
    return element;
}

function calculateExpense() {
    //setting all id values to variables (let)
    let incomeAmount = getParsedValueById("input-income");
    let foodExpense = getParsedValueById("input-food");
    let rentExpense = getParsedValueById("input-rent");
    let clothExpense = getParsedValueById("input-cloths");
    let totalExpense = pushElementTo("expense-total");
    let balanceRemaining = pushElementTo("balance-remaining");

    // total expense
    let totalCost = foodExpense + rentExpense + clothExpense;

    //validity check
    if (isNaN(incomeAmount) || incomeAmount < 0) {
        alert("Please provide a positive No String income value"); //errors will be displayed as Alert!
    } else if (isNaN(foodExpense) || foodExpense < 0) {
        alert("Please provide a positive No String food expense value");
    } else if (isNaN(rentExpense) || rentExpense < 0) {
        alert("Please provide a positive No String rent expense value");
    } else if (isNaN(clothExpense) || clothExpense < 0) {
        alert("Please provide a positive No String cloth expense value");
    } else if (incomeAmount < totalExpense) {
        alert("You have spent more than your Income!");
    }
    else {
        //pushing results to frontend
        totalExpense.innerText = totalCost;
        balanceRemaining.innerText = incomeAmount - totalCost;
    }
}

//bonus part
function calculateSavings() {
    //setting all id values to variables (let)

    let balanceRemaining = pushElementTo("balance-remaining");
    let totalExpense = pushElementTo("expense-total");
    let incomeAmount = getParsedValueById("input-income");
    let savingPercentage = getParsedValueById("input-saving-percentage");
    let savingAmount = pushElementTo("saving-amount");
    let remainBalance = pushElementTo("final-remaining");

    //getting remaining balance and totalExpense, parsing to variable 
    let totalExpForFinalBalance = parseInt(totalExpense.innerText);
    let balanceRemainingForSavingsCon = parseInt(balanceRemaining.innerText);

    //calculating percentage and remaing balance after savings
    let savings = (incomeAmount * savingPercentage) / 100;
    let finalBalance = incomeAmount - (savings + totalExpForFinalBalance);

    //checking if input has some error values
    if (isNaN(savingPercentage) || savingPercentage < 0) {
        alert("Percentage Value Can not Be 'NEGAIVE or STRING'! ");
    } else if (savings > balanceRemainingForSavingsCon) {
        alert("You Can not Save More than Your Remaining Balance");
    } else {
        //pushing results to frontend
        savingAmount.innerText = savings;
        remainBalance.innerText = finalBalance;
    }

}