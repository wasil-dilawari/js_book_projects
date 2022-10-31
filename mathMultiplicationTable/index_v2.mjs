//Chapter Project: Math Multiplication Table v2

//importing PromptSync Library
import PromptSync from "prompt-sync";
const prompt = PromptSync();

//clearing screen
console.clear();

//creating user input dialog box
let userInput = prompt("Please enter which table do you want: ");
let limit = prompt("Please mention limit :");
console.log("");

for (let index = 0; index < limit; index++) {
  console.log(
    userInput + " x " + (index + 1) + " = " + userInput * (index + 1)
  );
}

//goodbye message
console.log("\nThankyou for using this program!!");
