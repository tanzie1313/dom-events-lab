/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let number1 = "";
let number2 = "";
let currentOperatior  = "";
let result = "";
// let isOperatorClicked = false;

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
const calculator = document.querySelector('#calculator');
display.innerText = "0";
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', handlebuttonClick);
});
  
  
/*-------------------------------- Functions --------------------------------*/
buttons.forEach((button) => {
  button.addEventListener('click', handlebuttonClick);
} );


function handlebuttonClick(event) {
  const clickedbuttonValue = event.target.innerText;
  if (!isNaN(clickedbuttonValue)) {
    display.innerText = " ";
    handleNumberClick(clickedbuttonValue);
   
    // console.log('number clicked');
    
    } else if ([ "+", "-", "*", "/"].includes(clickedbuttonValue)) {
      handleOperatorClick(clickedbuttonValue);
      currentOperatior = clickedbuttonValue;
      number1 = parseFloat(display.innerText);
      display.innerText = " ";
      handleOperatorClick(clickedbuttonValue);
    } else if (clickedbuttonValue === "=") {
      number2 = parseFloat(display.innerText);
      console.log(number1, currentOperatior, number2);
      switch (currentOperatior) {
        case "+":
          result = number1 + number2;
          console.log(result);
          break;
        case "-":
          result = number1 - number2;
          console.log(result);
          break;
        case "*":
          result = number1 * number2;
          console.log(result);
          break;
        case "/":
          result = number1 / number2;
          console.log(result);
          break;
          default:
            return;
      }
      
      display.innerText = result;
    } if (clickedbuttonValue === "C") {
      display.innerText = "0";
      number1 = "";
      number2 = "";
      currentOperatior = "";
      result = "";
    }
}

function handleNumberClick(number) {
  display.innerText += number;

};
function handleOperatorClick(operator) {
 currentOperatior = operator;
};