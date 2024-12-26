//////////////////////////
// Function definitions //
//////////////////////////
const add = function (a, b) {
    return a + b;
  };
  
const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    if (b === 0) {return "undefined";}
    return a / b;
}

operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide,
}

const operate = function (a, op, b) {
    return operations[op](a, b);
}

const display = function (content, replace=false) {
    const displayRef = document.querySelector("#display");

    // Clear display if content is 'clear'.
    if (content === 'clear') {
        displayRef.textContent = '';
        return '';
    }

    // Either append to the display, replace result, or add new content.
    if ((displayRef.textContent !== '') && replace === false) {
        const temp = displayRef.textContent;
        const newContent = temp + content;
        displayRef.textContent = temp + content;
        return newContent;
    }
    else if ((displayRef.textContent !== '') && replace === true) {
        displayRef.textContent = content;
        return content;
    }
    else {
        displayRef.textContent = content;
        return content;
    }

}

const add_event_listeners = function () {
    const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const signs = {"plus-sign": "+", "minus-sign": "-", "multiply-sign": "*", "divide-sign": "/"};

    // Add button-like behaviour for each digit.
    for (const digit of digits) {
        const digitRef = document.querySelector(`[id="${digit}"]`);
        digitRef.addEventListener('click', function () {
            display(digit);
            user_input = user_input + digit;
        });
    }

    // Add a clear button.
    const clearRef = document.querySelector('#AC');
    clearRef.addEventListener('click', function () {
        display('clear');
        op = '';
        a = '';
        b = '';
        result = '';
        variables = [];
        user_input = '';
    });

    // Add an equals button.
    const equalRef = document.querySelector('#equals');
    equalRef.addEventListener('click', function () {
        display('clear');
        display(getLastNonEmptyElement(variables));
    });

    // Create buttons for all operations.
    for (const sign of Object.keys(signs)) {
        const signRef = document.querySelector(`#${sign}`);
        signRef.addEventListener('click', function () {
            op = signs[sign];
            variables.push(user_input);
            user_input = '';
            display('clear');
            console.log(variables);

            if (variables.length > 2) {
                b = variables.slice(-1);
                result = operate(+result, op, +b);
                variables.push(result);
                display('clear');
                display(result);
            }
            else if (variables.length == 2) {
                a = variables.slice(-2, 1);
                b = variables.slice(-1);
                result = operate(+a, op, +b);
                variables.push(result);
                display('clear');
                display(result);
            }
            // else {
            //     result = variables.slice(-1);
            // }
            console.log(variables);
            console.log(`result = ${result}`)
        });
    }
}

function getLastNonEmptyElement(arr) {
    return arr.slice().reverse().find(el => el !== '');
}

//////////////////////////
//      Main Code       //
//////////////////////////
add_event_listeners();

let op;
let a;
let b;
let result;
let variables = [];
let user_input = '';


