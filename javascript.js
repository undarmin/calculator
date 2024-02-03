

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

let displayValue = "";
let oldDisplayValue = "";
let newDisplayValue = "";
let currentOperation = "";

const display = document.querySelector(".display")
const numbers = [...document.querySelector("#numbers").children];
const operDisplay = document.querySelector("#oper")
numbers.pop();
numbers.pop();
const clear = document.querySelector(".clear");
const operations = [...document.querySelector("#operations").children];
operations.pop();
const equal = document.querySelector("#equal");
const backspace = document.querySelector(".backspace");

backspace.addEventListener("click", 
() => {if (!currentOperation || !decl) {display.textContent = (display.textContent).slice(0, -1)}})

let decl = false;

equal.addEventListener("click",
() => {
    display.textContent = operate(
        oldDisplayValue, currentOperation, display.textContent
    );
    oldDisplayValue = "";
    displayValue = "";
    currentOperation = "";
    decl = false;
})

clear.addEventListener("click", () => oper.textContent = displayValue =
oldDisplayValue = newDisplayValue = currentOperation = display.textContent = "");



numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (numbers.indexOf(number) === 9) {
            if (decl === true) {
                return;
            } else {
                decl = true;
            }
        }
        if (oldDisplayValue) {
            if (display.textContent === oldDisplayValue) {
                display.textContent = "";
        }
            display.textContent += number.getAttribute("class");
        } else {
            display.textContent += 
            number.getAttribute("class");
            displayValue = display.textContent;
        }
    }
        )
});

operations.forEach(
    (operation) => {
        operation.addEventListener('click', () => {
            if (!oldDisplayValue) {
            oldDisplayValue = display.textContent;
            currentOperation = oper.textContent = operation.textContent;
            } else {
                newDisplayValue = display.textContent;
                display.textContent = displayValue = operate(
                    oldDisplayValue, currentOperation, newDisplayValue
                );
                oldDisplayValue = display.textContent;
                currentOperation = oper.textContent = operation.textContent;
                newDisplayValue = "";
            }
            decl = false;
        })
    }
)