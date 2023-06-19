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
let secondumber;
let operator;

function operate (a,b) {
  if (operator === "+") {
    addition (a,b);
  }
  else if (operator === "-") {
    subtraction (a,b);
  }
  else if (operator === "*") {
    multiplication(a,b);
  }
  else if (operator === "/") {
    division (a,b);
  }
}

//function populates screen with the buttons that are clicked on//
let displayValue = "";

const screen = document.querySelector(".screen");

const numButtons = document.querySelectorAll(".number")

numButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(button.value);
    if (displayValue === "+" || displayValue === "-" || displayValue === "x" || displayValue == '÷') {
      displayValue = "";
    }
    displayValue += button.value;
    screen.textContent = displayValue;
  });
});

const operatorButtons = document.querySelectorAll(".operators")

operatorButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(button.value);
    screen.textContent = "";
    displayValue = button.value;
    screen.textContent = displayValue;
  })
})