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

let num1 = Number(prompt("Enter Number 1: ")); 
let num2 = Number(prompt("Enter Number 2: ")); 

console.log(add(num1, num2)); 
console.log(subtract(num1, num2)); 
console.log(divide(num1, num2)); 


