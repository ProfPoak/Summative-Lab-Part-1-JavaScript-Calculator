
//Defining the history array
const calcHistory = []

//Functions for history tracking
//Function to push calculated value to calcHistory
function historyPush (value) {
    calcHistory.push(value);
}

//Function to console.log calcHistory
function logHistory(array) {
    if(array.length === 0) {
        console.log("No calculation history")
    } else {
        console.log("History =", calcHistory)
    }
}

logHistory(calcHistory)

//Number validation helper function
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

// Calculation functions with console logs to confirm functionality
//Addition Function
function addition(num1, num2) {
    if (!validateNumbers(num1, num2)) return null;
    
    const result = num1 + num2;
    historyPush(result);
    return result;
}

const additionTest = addition(1, "h") 
console.log("Addition result =", additionTest)

//Subtraction Function
function subtraction(num1, num2) {
    if (!validateNumbers(num1, num2)) return null;
    
    const result = num1 - num2;
    historyPush(result);
    return result;
}

const subtractionTest = subtraction(1, 2) 
console.log("Subtraction result =", subtractionTest)

//Multiplication Function
function multiplication(num1, num2) {
    if (!validateNumbers(num1, num2)) return null;
    
    const result = num1 * num2;
    historyPush(result);
    return result;
}

const multiplicationTest = multiplication(-1, 6) 
console.log("Multiplication result =", multiplicationTest)

//Division Function
function division(num1, num2) {
    if (!validateNumbers(num1, num2)) return null;
    
    if (num2 === 0) {
        console.log("Cannot divide by 0");
        return null;
    }
    
    const result = num1 / num2;
    historyPush(result);
    return result;
}

const divisionTest = division(30, 10) 
console.log("Division result =", divisionTest)

logHistory(calcHistory)
