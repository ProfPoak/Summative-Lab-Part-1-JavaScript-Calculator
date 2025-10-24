
//Defining the history array
const calcHistory = []

//Functions for history tracking
//Function to push calculation details as an object to the calcHistory array. Correlated calculation symbols are saved to each object for easier console logs.
function historyPush (operation, symbol, num1, num2, result) {
    calcHistory.push({
        operation,
        symbol,
        num1,
        num2,
        result
    });
}

//Function to console.log calcHistory using a for loop to access each object in the array and then log specific properties from each object
function logHistory(array) {
    if(array.length === 0) {
        console.log("No calculation history")
    } else {
        console.log("History:")
        for(let i=0; i < array.length; i++) {
            const item = calcHistory[i]
            console.log(`  ${item.num1} ${item.symbol} ${item.num2} = ${item.result}`)
        }
    }
}

logHistory(calcHistory)

//Number validation function to ensure that paramaters entered are only numbers. 
//Using typeof to check broadly for alternative data types. isNaN used to prevent NaN from getting through the typeof test
function validateNumbers(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        console.log("Error: Both inputs must be numbers");
        return false;
    }
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Error: Inputs cannot be NaN");
        return false;
    }
    return true;
}

// Calculation functions with console logs to check functionality
//Addition Function
function addition(num1, num2) {
    if (!validateNumbers(num1, num2)) return null;
    
    const result = num1 + num2;
    historyPush('addition', '+', num1, num2, result);
    return result;
}

console.log("Addition result =", addition(2, 2))

//Subtraction Function
function subtraction(num1, num2) {
    if (!validateNumbers(num1, num2)) return null;
    
    const result = num1 - num2;
    historyPush('subtraction', '-', num1, num2, result);
    return result;
}

console.log("Subtraction result =", subtraction(10, 5))

//Multiplication Function
function multiplication(num1, num2) {
    if (!validateNumbers(num1, num2)) return null;
    
    const result = num1 * num2;
    historyPush('multiplication', '*', num1, num2, result);
    return result;
}

console.log("Multiplication result =", multiplication(10, 10))

//Division Function
function division(num1, num2) {
    if (!validateNumbers(num1, num2)) return null;
    
    if (num2 === 0) {
        console.log("Cannot divide by 0");
        return null;
    }
    
    const result = num1 / num2;
    historyPush('division', '/', num1, num2, result);
    return result;
}

console.log("Division result =", division(500, 10))

logHistory(calcHistory)
