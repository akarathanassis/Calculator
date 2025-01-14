let expression = []; 
let currentValue = ""; 

const display = document.querySelector(".display"); 

const buttons = document.querySelectorAll("button"); 
buttons.forEach((button) => { 
    button.addEventListener("click", () => {
        // if (button.getHTML() === "=") { 
        //     let result = evaluateExpression(expression);
        //     display.textContent = result; 
        //     expression = []; 
        // }
        // else if (button.getHTML() === "AC") { 
        //     expression = []; 
        //     display.textContent = "0"; 
        // }
        // else {
        //     if ()
        //     expression.push(button.getHTML());
        //     display.textContent = expression.join(" ");     
        // }

        let input = button.getHTML(); 
        // first check if we are inputting an operator
        if (!checkOperator(input)) { 
            // we're not, so either a number or =. If num, add to currentValue
            if (!(input === "=")) { 
                // we clicked a number or the decimal, so add to currentValue
                currentValue += input; 
                if (display.textContent.trim() === "0") { 
                    display.textContent = input;    
                }
                else { 
                    display.textContent += input;  
                }
            }
            console.log(currentValue); 
        }
        // now, clear everything if AC is clicked
        else if (input === "AC") { 
            currentValue = ""; 
            display.textContent = "0"; 
        }
        // otherwise, we clicked an operator
        else { 
            // first push the currentValue to the expression
            expression.push(currentValue); 
            // then push the operator we clicked to the expression
            expression.push(input); 
            // and set the currentValue to empty to begin second number input
            currentValue = ""; 
            display.textContent += input; 
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

