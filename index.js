// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b = 0) {
        return "Undefined";
    }
    return a / b;
}

// Prompt to get users choice of operation
function calculator() {
    let userchoice = prompt("Choose an operation: Add, Subtract, Multiply, or Divide")

    // Check if operation is valid
    if (userchoice === 'add' || userchoice === 'subtract' || userchoice === 'multiply' || userchoice === 'divide') {
        const num1 = parseFloat
        (prompt("Enter a number below:"));
        const num2 = parseFloat
        (prompt("Enter another number below:"));

        let result;

        // Do the calculation based on what the user imputs
        if (userchoice === 'add') {
            result = add(num1, num2);
        } else if (userchoice === 'subtract') {
            result = subtract(num1, num2);
        } else if (userchoice === 'multiply') {
            result = multiply(num1, num2);
        } else if (userchoice === 'divide') {
            result = divide(num1, num2);
        }

        console.log(`The result is: ` + result);
    } else {
        console.log("Error: Invalid operation. You can only pick Add, Subtract, Multiply, or Divide.");
    }
}

// Start the calculator
calculator();
