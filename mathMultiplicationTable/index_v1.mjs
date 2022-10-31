//Chapter Project: Math Multiplication Table v1

//imports
import PromptSync from "prompt-sync";
const prompt = PromptSync();

//clearing screen
console.clear();

//Getting input from user
const maxTable = Number(prompt("Please enter max table number: ")) + 1;

//Initializing variables
const mltTable = [];
let temp = 0;

//While loop to repeat up to given user input
while (temp < maxTable) {
  const tempArr = [];

  //For loop to generate multiplier table
  for (let i = 0; i < 11; i++) {
    tempArr.push(i * temp);
  }

  //Push temporary Array into main Array
  mltTable.push(tempArr);
  temp++;
}

//Display Output in Table form
console.table(mltTable);

//goodbye message
console.log("\nThankyou for using this program!!");
