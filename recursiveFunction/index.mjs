//Chapter Project - Recursive Function

//imports
import PromptSync from "prompt-sync";
const prompt = PromptSync();

//Function numberCounter(starting number) goes to 10
function numberCounter(x) {
  console.log(x);
  if (x < 10) {
    numberCounter(x + 1);
  }
}

//Calling Function while getting input from user
numberCounter(Number(prompt("Please enter starting point to go to 10: ")));
