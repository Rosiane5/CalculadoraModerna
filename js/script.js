const resultArea = document.getElementById('result-area');
const number = document.querySelectorAll('.number');
const clearButton = document.querySelector('.clear')
const operatorButton = document.querySelectorAll('.operation')
const resultButton = document.querySelector('.result')


let currentInput = '0'
let operator = '';
let fastvalue = null;
let secondvalue = null;



function updateDisplay() {
  if (currentInput === null  || currentInput === '') {
    resultArea.value = '0';
  } else {
    resultArea.value = currentInput.replace('.', ',');
  }  
}


function clear() {
 
  currentInput = '0';
  updateDisplay();
}

clearButton.addEventListener('click', clear);


number.forEach((button) => {
  button.addEventListener('click', (e) =>  {
    const buttonValue = e.target.innerText
    if (currentInput === '0') {
       currentInput = buttonValue;
    } else {
      currentInput += buttonValue;
    }
    updateDisplay()
  }) 
  
});

operatorButton.forEach((button) => { 
  button.addEventListener('click', (e) => {
    const operatorValue = e.target.innerText
      if (fastvalue === null) {
        fastvalue = parseFloat(currentInput);
      } 
      operator = operatorValue; 
      currentInput = '0'; 
    

  }) 
})

function calculate() {
  let result = 0;
  const firstValue = parseFloat(fastvalue);
  const  secondvalue = parseFloat(currentInput);

  switch (operator) {
    case '+/-':
      result = (parseFloat(currentInput) * -1);
      break;
    case '%':
      result = (parseFloat(currentInput) / 100);
      break;

    case '+':
      result = firstValue + secondvalue;
      break;
    case '-':
      result = firstValue - secondvalue;
      break;
    case '*':
      result = firstValue * secondvalue;
     break;
    case '/':
      result = firstValue / secondvalue;
       if (secondvalue === 0) {
        result = 'Error';
        }
      break;
    default:
      
  }

 currentInput = String(result);
 fastvalue = null;
 operator = '';
 updateDisplay();
}

resultButton.addEventListener('click', (e) => {
  const value = e.target.textContent;
  if (operator && fastvalue !== null) {
    calculate();
  }
})




