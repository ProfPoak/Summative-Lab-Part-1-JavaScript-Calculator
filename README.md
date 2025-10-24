# JavaScript calculator

A command-line calculator built with JavaScript to perform basic arithmetic (addition, subtraction, multiplication, division) and track calculation history.

Built as a learning project to practice JavaScript fundamentals including functions, validation, data structures, and error handling.

## Features

- **Four Basic Operations:** Addition, Subtraction, Multiplication, and Division
- **Input Validation:** Ensures data inputs are valid numbers
- **Error Handling:** Protects against division by zero
- **Calculation History:** Tracks all performed calculations including the operation and result
- **Formatted Output:** History logs formatted for easy reading and tracking (e.g., "2 + 2 = 4")

## Usage
```javascript
//Using the calculator
const sum = addition(2, 2);             //Returns 4
const difference = subtraction(3, 2);   //Returns 1
const product = multiplication(2, 2);   //Returns 4
const quotient = division(4, 2);        //Returns 2

// View calculation history
logHistory(calcHistory)
//Output:
//History:
//  2 + 2 = 4
//  3 - 2 = 1
//  2 * 2 = 4
//  4 / 2 = 2

//Error handling examples
division(10, 0)             //"Cannot divide by 0", returns null
addition("hello", 5)        //"Error: Both inputs must be numbers", returns null
```

## Functions

### Calculation Functions
- `addition(num1, num2)` - Adds two numbers together and returns the result
- `subtraction(num1, num2)` - Subtracts num2 from num1 and returns the result
- `multiplication(num1, num2)` - Multiplies two numbers together and returns the result
- `division(num1, num2)` - Divides num1 by num2 and returns the result

### Helper Functions
- `validateNumbers(num1, num2)` - Validates that both inputs are valid numbers (returns error for any invalid inputs)
- `historyPush(operation, symbol, num1, num2, result)` - Collects operation details and pushes as an object to the history array
- `logHistory(array)` - Displays all available calculations in the history or shows "No calculation history"

## Author

Porter Hakes