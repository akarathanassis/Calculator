let expression = []; 
let currentValue = ""; 

const display = document.querySelector(".display"); 

const buttons = document.querySelectorAll("button"); 
buttons.forEach((button) => { 
    button.addEventListener("click", () => {

        let input = button.getHTML(); 
        // first check if we are inputting an operator
        if (!checkOperator(input)) { 
            // we're not, so either a number or =. If num, add to currentValue
            if (!(input === "=")) { 
                // we clicked a number or the decimal, so add to currentValue
                currentValue += input; 
                if (display.textContent.trim() === "0") { 
                    display.textContent = input.toLocaleString();    
                }
                else { 
                    display.textContent += input.toLocaleString();  
                }
            }
            // or, we clicked the equals sign, so have to evaluate the expression
            else { 
                expression.push(currentValue); 
                let result = operation(expression[0], expression[1], expression[2]);
                display.textContent = result.toLocaleString();  
                currentValue = result; 
                expression = []; 
            }
        }
        // now, clear everything if AC is clicked
        else if (input === "AC") { 
            currentValue = ""; 
            display.textContent = "0"; 
            expression = []; 
        }
        // otherwise, we clicked an operator
        else { 
            // first push the currentValue to the expression
            expression.push(currentValue); 
            // then push the operator we clicked to the expression
            expression.push(input); 
            // and set the currentValue to empty to begin second number input
            currentValue = ""; 
            display.textContent += input.toLocaleString(); 
        }
    })
})

function checkOperator(operator) { 
    return ["+", "-", "/", "x", "AC"].includes(operator); 
}

function evaluateExpression(expression) { 
    return operation(Number(expression[0]), expression[1], Number(expression[2])); 
}

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

function operation(num1, operator, num2) { 
    switch (operator) { 
        case "+":  
            return add(num1, num2); 
            break; 
        case "-": 
            return subtract(num1, num2); 
            break; 
        case "x": 
            return multiply(num1, num2); 
            break; 
        case "/": 
            return divide(num1, num2); 
            break; 
        default: 
            return "Please enter a valid operator (+, -, *, /)"
    }
}

