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

let firstNumber = "";
let secondNumber = "";
let operator = "";

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
    if (displayValue.includes("+") || displayValue.includes("-") || displayValue.includes("x") || displayValue.includes('÷')) {
      operator = displayValue.charAt(displayValue.length - 1);
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
    if (firstNumber === "") {
      firstNumber = displayValue;
      console.log(firstNumber);
      screen.textContent = "";
      displayValue = button.value;
      screen.textContent = displayValue;
    }
    else {
      secondNumber = displayValue;
      console.log(secondNumber);
      displayValue = operate(+firstNumber,+secondNumber);
      firstNumber = displayValue;
      displayValue = displayValue + " " + button.value;
      screen.textContent = displayValue;
    }
  })
})

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener('click', (e) => {
  secondNumber = displayValue;
  console.log(secondNumber);
  displayValue = operate(+firstNumber,+secondNumber);
  console.log(displayValue);
  if (displayValue === Infinity) {
    screen.textContent = "You cant do that!"
  }
  else {
    screen.textContent = displayValue;
  }  
  displayValue = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
})

const clearButton = document.querySelector(".clear");

clearButton.addEventListener('click', (e) => {
  screen.textContent = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  displayValue = "";
});

const deleteButton = document.querySelector(".back_space");

deleteButton.addEventListener('click', (e) => {
  console.log(displayValue);
  displayValue = displayValue.slice(0,(displayValue.length - 1));
  screen.textContent = displayValue;
});