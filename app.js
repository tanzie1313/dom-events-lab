/*-------------------------------- Constants --------------------------------*/
// const calculator = document.querySelector("#calculator");
const buttons = document.querySelectorAll(".button");
const display = document.querySelector(".display");
/*-------------------------------- Variables --------------------------------*/
let currentOperator = "";
let number1 = "";
let number2 = "";
let result = "";
//let isOperator = false;
let displayValue = "";
let clear = "";
/*------------------------ Cached Element References ------------------------*/

display.innerText = 0 
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonclick)
});

/*-------------------------------- Functions --------------------------------*/
function handleButtonclick(event) {
  const clickedButtonvalue = event.target.innerText
  if (!isNaN(clickedButtonvalue)) {
     displayValue += clickedButtonvalue; //concationation operatior 
    display.innerText = displayValue;
  } else if(["+","-","*","/"].includes(clickedButtonvalue)) {
    number1 = displayValue;
    currentOperator = clickedButtonvalue;
    displayValue = "";
    //console.log('clicked number');
  } else if (clickedButtonvalue === "="){
      number2 = displayValue;
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    switch(currentOperator){
      case "+":
        result = num1 + num2;
        break
      case  "-":
        result = num1 - num2;
        break
      case "*":
        result = num1 * num2;
        break
      case "/":
        result = num1 / num2;
        break
      default:
          return
    }
    displayValue = result;
    display.innerText = displayValue;
  } else if (clickedButtonvalue === "C") {  //move the (clickeButtonvalue in else if statement)
    displayValue = clear;
    display.innerText = 0;
  }
};