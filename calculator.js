
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

// Calculation functions with console logs to confirm functionality
//Addition Function
function addition(num1, num2) {
    const result = num1 + num2
    historyPush(result)
    return(result) 
}

const additionTest = addition(1, 2) 
console.log("Addition result =", additionTest)

//Subtraction Function
function subtraction(num1, num2) {
    const result = num1 - num2
    historyPush(result)
    return(result) 
}

const subtractionTest = subtraction(1, 2) 
console.log("Subtraction result =", subtractionTest)

//Multiplication Function
function multiplication(num1, num2) {
    const result = num1 * num2
    historyPush(result)
    return(result) 
}

let multiplicationTest = multiplication(-1, 6) 
console.log("Multplication result =", multiplicationTest)


//Division Function
function division(num1, num2) {
    if (num2 === 0) {
        console.log("Cannot divide by 0")
        return(null)
    } else { 
        const result = num1 / num2
        historyPush(result)
        return(result)
    }
}

const divisionTest = division(10, .03) 
console.log("Division result =", divisionTest)

logHistory(calcHistory)