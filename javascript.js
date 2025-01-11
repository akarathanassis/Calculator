function add(num1, num2) { 
    return num1 + num2
}

function subtract(num1, num2) { 
    return num1 - num2
}

function multiply(num1, num2) { 
    return num1 * num2
}

function divide(num1, num2) { 
    if (num2 === 0) { 
        return "Error"
    }
    return num1 / num2
}

function operation(num1, num2, operator) { 
    switch (operator) { 
        case "+":  
            return add(num1, num2); 
            break; 
        case "-": 
            return subtract(num1, num2); 
            break; 
        case "*": 
            return multiply(num1, num2); 
            break; 
        case "/": 
            return divide(num1, num2); 
            break; 
        default: 
            return "Please enter a valid operator (+, -, *, /)"
    }
}

let num1 = Number(prompt("Enter Number 1: ")); 
let num2 = Number(prompt("Enter Number 2: ")); 
let operator = prompt("Enter an operation (+, -, *, /): "); 

console.log(operator); 

console.log(operation(num1, num2, operator)); 

