//Chapter Project: Rock Paper Scissors Game

//imports
import randomInteger from "random-int";
import PromptSync from "prompt-sync";
const prompt = PromptSync();

//Random input between 0 and 2 as computerChoice
var computerChoice = randomInteger(0, 2);

//Messages in variables
var choices = ["Rock", "Paper", "Scissors"];
var welcomeMessage =
  "Let's Play!!! \nPress 0 for Rock, 1 for Paper, 2 for Scissors";

//Welcome Message
console.log(welcomeMessage);

//Getting input from user and showing the choices
var move = Number(prompt("Please make your move: "));

if (move > 2) {
  console.log("Invalid input");
} else {
  console.log("Your choice: " + choices[move]);
  console.log("Computer's choice: " + choices[computerChoice]);

  //Comparing choices and announcing result
  if (move === computerChoice) {
    console.log("Game Draw!!!");
  } else if (move === 0 && computerChoice === 1) {
    // Rock vs Paper
    console.log("Computer Wins!");
  } else if (move === 0 && computerChoice === 2) {
    // Rock vs Scissors
    console.log("You Win!");
  } else if (move === 1 && computerChoice === 0) {
    // Paper vs Rock
    console.log("You Win!");
  } else if (move === 1 && computerChoice === 2) {
    // Paper vs Scissors
    console.log("Computer Wins!");
  } else if (move === 2 && computerChoice === 0) {
    // Scissors vs Rock
    console.log("Computer Wins!");
  } else if (move === 2 && computerChoice === 1) {
    // Scissors vs Paper
    console.log("You Win!");
  } else if (move > 2) {
    console.log("Invalid input");
  }

  console.log("Thankyou for playing.");
}
