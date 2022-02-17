
// declaring a function for getting value as number
function getParsedValue(idName){
    var parsedValue = parseInt(document.getElementById(idName).value);
    return parsedValue;
}

// declaring function to get elements by id
function getElement(idName){
    var element = document.getElementById(idName);
    return element;
}

function calculatingExpense(){
    var incomeAmount = getParsedValue("input-income");
    var foodCost = getParsedValue("input-food");
    var rentCost = getParsedValue("input-rent");
    var clothCost = getParsedValue("input-cloths");
    var totalExpense = getElement("expense-total");
    var balanceAfterExpense = getElement("balance-total");

    // total cost
    var totalCost = foodCost + rentCost + clothCost;

    totalExpense.innerText = totalCost;
    balanceAfterExpense.innertext = incomeAmount - totalCost;
}