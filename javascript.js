let expression = []; 
let currentValue = ""; 

const display = document.querySelector(".display"); 

const buttons = document.querySelectorAll("button"); 
buttons.forEach((button) => { 
    button.addEventListener("click", () => {
        if (button.getHTML() === "=") { 
            let result = evaluateExpression(expression);
            display.textContent = result; 
            expression = []; 
        }
        else if (button.getHTML() === "AC") { 
            expression = []; 
            display.textContent = "0"; 
        }
        else {
        expression.push(button.getHTML());
        display.textContent = expression.join(" ");     
        }
       
    })
})

function checkOperator(operator) { 
    return ["+", "-", "/", "*"].includes(operator); 
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

