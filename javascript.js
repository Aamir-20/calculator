console.log("we are working in this directory with the correct page loaded")
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



let op;
let a = 0;
let b = 0;

console.log(operate(1, "-", 43));

