let firstNumber = "";
let secondNumber = "";
let operator = "";
let shouldResetDisplay = false;

const display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");

const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const decimalButton = document.querySelector("#decimal");

// Math Functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error";
  }

  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);

    default:
      return b;
  }
}

// Display

function appendNumber(number) {
  if (display.textContent === "0" || shouldResetDisplay) {
    display.textContent = "";
    shouldResetDisplay = false;
  }

  if (number === "." && display.textContent.includes(".")) {
    return;
  }

  display.textContent += number;
}

// Operators

function chooseOperator(selectedOperator) {
  if (display.textContent === "") return;

  if (operator !== "" && !shouldResetDisplay) {
    calculate();
  }

  firstNumber = display.textContent;

  operator = selectedOperator;

  shouldResetDisplay = true;
}

// Calculate

function calculate() {
  if (operator === "" || shouldResetDisplay) return;

  secondNumber = display.textContent;

  let result = operate(operator, Number(firstNumber), Number(secondNumber));

  display.textContent = result;

  firstNumber = result;
  operator = "";
  shouldResetDisplay = true;
}

// Clear

function clearCalculator() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  shouldResetDisplay = false;

  display.textContent = "0";
}

// Events

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.textContent);
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    let selected = button.textContent;

    if (selected === "×") selected = "*";
    if (selected === "÷") selected = "/";

    chooseOperator(selected);
  });
});

equalsButton.addEventListener("click", calculate);

clearButton.addEventListener("click", clearCalculator);

decimalButton.addEventListener("click", () => {
  appendNumber(".");
});

document.addEventListener("keydown", (event) => {
  if (event.key >= "0" && event.key <= "9") {
    appendNumber(event.key);
  }
  if (event.key === ".") {
    appendNumber(".");
  }
  if (["+", "-", "*", "/"].includes(event.key)) {
    chooseOperator(event.key);
  }

  if (event.key === "Enter" || event.key === "=") {
    calculate();
  }

  if (event.key === "Escape") {
    clearCalculator();
  }

  if (event.key === "Backspace") {
    if (display.textContent.length > 1) {
      display.textContent = display.textContent.slice(0, -1);
    } else {
      display.textContent = "0";
    }
  }
});
