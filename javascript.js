let expression = []; 
let currentValue = ""; 

const display = document.querySelector(".display"); 

const buttons = document.querySelectorAll("button"); 
buttons.forEach((button) => { 
    button.addEventListener("click", () => {

        let input = button.getHTML(); 
        console.log(currentValue); 
        // check for double floating point input 
        if (!((input === ".") && currentValue.includes("."))) { 
            // first check if we are inputting an operator
            if (!checkOperator(input)) { 
                // we're not, so either a number or =. If num, add to currentValue
                if (!(input === "=")) { 
                    // if we input a floating point first then add a zero for style
                    if ((input === ".") && (currentValue === "")) { 
                        input = "0."; 
                        console.log(input); 
                    } 
                    // we clicked a number or the decimal, so add to currentValue
                    currentValue += input;    
                    if (display.textContent.trim() === "0") { 
                        display.textContent = currentValue.toLocaleString();    
                    }
                    else { 
                        display.textContent += input.toLocaleString();  
                    }
                }
                // or, we clicked the equals sign, so have to evaluate the expression
                else { 
                    // but we have to check if we've inputted a valid expression first
                    if (currentValue) { 
                        expression.push(currentValue); 
                        console.log(expression); 
                        let result = calcExpression(expression); 
                        display.textContent = result.toLocaleString();  
                        currentValue = result; 
                        expression = [];     
                    }
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
    return String(Number(num1) + Number(num2))
}

function subtract(num1, num2) { 
    return String(num1 - num2)
}

function multiply(num1, num2) { 
    return String(num1 * num2)
}

function divide(num1, num2) { 
    if (num2 === "0") { 
        return "Undefined"
    }
    return String(num1 / num2)
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

function calcExpression(expression) { 
    // first value will always be a value, set this to current 
    let currentValue = expression[0]; 
    let currentOperator = ""; 
    for (let i=1; i < expression.length; i++) { 
        // every odd index will be an operator 
        if (i%2 != 0) { 
            currentOperator = expression[i]; 
            continue
        }
        // otherwise we have a number 
        else { 
            // if we have a stored operator we need to evaluate the sub-expression
            if (currentOperator) { 
                currentValue = operation(currentValue, currentOperator, expression[i]); 
                // set the operator to empty string 
                currentOperator = ""; 
            }
        }
    }
    return currentValue
}