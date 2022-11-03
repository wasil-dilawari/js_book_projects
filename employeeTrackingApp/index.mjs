//Chapter Project: Employee Tracking App

//imports
import PromptSync from "prompt-sync";
const prompt = PromptSync();

//initializing variables
var again = true;
const listofEmployees = [];

//creating class
class Employee {
  constructor(firstName, lastName, years) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.years = years);
  }
}

//welcome message
console.clear();
console.log(
  "Welcome to Employee Tracking App \n\nPlease Enter Employee Data below:"
);

//data entry loop
while (again) {
  let tempEmp = new Employee(
    prompt("Please Enter First Name: "),
    prompt("Please Enter Last Name: "),
    Number(prompt("Please Enter Years of Experience: "))
  );
  listofEmployees.push(tempEmp);
  let tempAgain = prompt("Add another Employee? (y/n)");
  if (tempAgain !== "y") {
    again = false;
  }
}

//displaying output
for (let counter = 0; counter < listofEmployees.length; counter++) {
  console.log(
    `${counter + 1}. ${listofEmployees[counter].firstName} ${
      listofEmployees[counter].lastName
    } has been working with us for ${listofEmployees[counter].years} years.`
  );
}
