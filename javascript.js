let num1;
let num2;
let operator;

function add(a, b) {
    return +a + +b;
}

function subtract(a, b) {
    return +a - +b;
}

function divide(a, b) {
    return +a / +b;
}

function multiply(a, b) {
    return +a * +b;
}


function operate(a, op, b) {
    let result;
    switch(op) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        default:
            result = "ERROR";
    }
    return result;
}


const display = document.querySelector(".display")
const numbers = [...document.querySelector("#numbers").children];
const clear = document.querySelector(".clear");

clear.addEventListener("click", () => display.textContent = "");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        display.textContent += 
        number.getAttribute("class");
    }
        )
});