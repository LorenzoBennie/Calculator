function addition (a,b) {
  return a + b;
}

function subtraction (a,b) {
  return a - b;
}

function multiplication (a,b) {
  return a * b;
}

function division (a,b) {
  return a / b;
}

let firstNumber;
let secondNumber;
let operator;

function operate (a,b) {
  if (operator === "+") {
    return addition(a,b);
  }
  else if (operator === "-") {
    return subtraction(a,b);
  }
  else if (operator === "x") {
    return multiplication(a,b);
  }
  else if (operator === "÷") {
    return division(a,b);
  }
}

//function populates screen with the buttons that are clicked on//
let displayValue = "";

const screen = document.querySelector(".screen");

const numButtons = document.querySelectorAll(".number")

numButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (displayValue === "+" || displayValue === "-" || displayValue === "x" || displayValue == '÷') {
      operator = displayValue;
      displayValue = "";
      console.log(operator);
    }
    displayValue += button.value;
    screen.textContent = displayValue;
  });
});

const operatorButtons = document.querySelectorAll(".operators")

operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    firstNumber = displayValue;
    console.log(firstNumber);
    screen.textContent = "";
    displayValue = button.value;
    screen.textContent = displayValue;
  })
})

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener('click', (e) => {
  secondNumber = displayValue;
  console.log(secondNumber);
  displayValue = operate(+firstNumber,+secondNumber);
  console.log(displayValue);
  screen.textContent = displayValue;
  displayValue = "";
})