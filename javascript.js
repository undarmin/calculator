

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
    return Math.round(result * 10000) / 10000 || result;
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
() => {
    backspacer();
})
function backspacer() {
    if (!currentOperation || !decl) 
    {
        display.textContent = (display.textContent).slice(0, -1)
    }
}


let decl = false;

equal.addEventListener("click",
() => {
    parseEqual();
})

function parseEqual() {
    display.textContent = operate(
        oldDisplayValue, currentOperation, display.textContent
    );
    oldDisplayValue = "";
    displayValue = "";
    currentOperation = "";
    decl = false;
}

clear.addEventListener("click", () => {clearer()});
function clearer() {
    oper.textContent = displayValue =
oldDisplayValue = newDisplayValue = currentOperation = display.textContent = ""
}



numbers.forEach((number) => {
    number.addEventListener("click", () => buttonPress(number)
        )
});

function buttonPress(number) {
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

operations.forEach(
    (operation) => {
        operation.addEventListener('click', () => {parseOperation(operation)});
    }
)

function parseOperation(operation) {
    
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
}

document.addEventListener("keypress", (e) => {
    console.log(e.key)
    switch (e.key) {
        case "1":
            buttonPress(numbers[0]);
            break;
        case "2":
            buttonPress(numbers[1]);
            break;
        case "3":
            buttonPress(numbers[2]);
            break;
        case "4":
            buttonPress(numbers[3]);
            break;
        case "5":
            buttonPress(numbers[4]);
            break;
        case "6":
            buttonPress(numbers[5]);
            break;
        case "7":
            buttonPress(numbers[6]);
            break;
        case "8":
            buttonPress(numbers[7]);
            break;
        case "9":
            buttonPress(numbers[8]);
            break;
        case ".":
            buttonPress(numbers[9]);
            break;
        case "0":
            buttonPress(numbers[10]);
            break;
        case "c":
            clearer();
            break;
        case "+":
            parseOperation(operations[0]);
            break;
        case "-":
            parseOperation(operations[1]);
            break;
        case "*":
            parseOperation(operations[2]);
            break;
        case "/":
            parseOperation(operations[3]);
            break;
        case "=":
            parseEqual();
            break;
    }
})