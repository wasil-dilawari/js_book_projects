//Chapter Project: Calculator

//imports
import PromptSync from "prompt-sync";
const prompt = PromptSync();

//Calculator Function (first number, operator, second number) Returns answer
function calculator(num1, opp, num2) {
  switch (opp) {
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
    default:
      console.log("Unknown operator. Using default (addition)");
      return num1 + num2;
      break;
  }
}

//Getting input from user
let first = Number(prompt("Please enter First Number: "));
let operator = prompt("Please select Operator +  -  *  or  /  :");
let second = Number(prompt("Please enter Second Number: "));

//Calling function
let answer = calculator(first, operator, second);

//Displaying answer
console.log("The Answer is : " + answer);
