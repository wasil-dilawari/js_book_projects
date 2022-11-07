// Assignment: Number to Word Conversion (07-11-2022)

// Imports
import PromptSync from "prompt-sync";
const prompt = PromptSync();

// Initializing arrays and variables
const unitsArr = [
  "Zero",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
];
const teensArr = [
  "",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];
const tensArr = [
  "",
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];
var inputinWords = "";

const userInputinNumber = Number(
  prompt("Please enter a number (between 1 and 9,999,999): ")
);
const userInput = userInputinNumber.toString(); // Converting User Input into String
const userInputLength = userInputinNumber == 0 ? 1 : userInput.length; // Checking Number of Digits and Zero Value

// User Input Validity Test
if (
  userInputinNumber < 0 ||
  userInputinNumber > 9999999 ||
  isNaN(userInputinNumber)
) {
  var invalid = true;
} else {
  var invalid = false;
}

// Splitting User Input into Digit Place
const unit = userInput.charAt(userInputLength - 1);
const ten = userInput.charAt(userInputLength - 2);
const hundred = userInput.charAt(userInputLength - 3);
const thousand = userInput.charAt(userInputLength - 4);
const tenthousand = userInput.charAt(userInputLength - 5);
const hundredthousand = userInput.charAt(userInputLength - 6);
const million = userInput.charAt(userInputLength - 7);

switch (userInputLength) {
  case 1: // 1 to 9
    inputinWords += " " + getUnits(unit);
    break;
  case 2: // 10 to 99
    inputinWords += " " + getTens(ten, unit);
    break;
  case 3: // 100 to 999
    inputinWords += " " + getUnits(hundred) + " Hundred";
    if (ten == 0 && unit != 0) {
      inputinWords += " and " + getUnits(unit);
    } else if (ten != 0) {
      inputinWords += " and " + getTens(ten, unit);
    }
    break;
  case 4: // 1,000 to 9,999
    inputinWords += " " + getUnits(thousand) + " Thousand";
    if (hundred != 0) {
      inputinWords += " " + getUnits(hundred) + " Hundred";
    }
    if (ten == 0 && unit != 0) {
      inputinWords += " and " + getUnits(unit);
    } else if (ten != 0) {
      inputinWords += " and " + getTens(ten, unit);
    }
    break;
  case 5: // 10,000 to 99,999
    inputinWords += " " + getTens(tenthousand, thousand) + " Thousand";
    if (hundred != 0) {
      inputinWords += " " + getUnits(hundred) + " Hundred";
    }
    if (ten == 0 && unit != 0) {
      inputinWords += " and " + getUnits(unit);
    } else if (ten != 0) {
      inputinWords += " and " + getTens(ten, unit);
    }
    break;
  case 6: // 100,000 to 999,999
    inputinWords += " " + getUnits(hundredthousand) + " Hundred";
    if (tenthousand == 0 && thousand != 0) {
      inputinWords += " and " + getUnits(thousand) + " Thousand";
    } else if (tenthousand != 0) {
      inputinWords += " and " + getTens(tenthousand, thousand) + " Thousand";
    } else {
      inputinWords += " Thousand";
    }
    if (hundred != 0) {
      inputinWords += " " + getUnits(hundred) + " Hundred";
    }
    if (ten == 0 && unit != 0) {
      inputinWords += " and " + getUnits(unit);
    } else if (ten != 0) {
      inputinWords += " and " + getTens(ten, unit);
    }
    break;
  case 7: // 1,000,000 to 9,999,999
    inputinWords += " " + getUnits(million) + " Million";
    if (hundredthousand != 0) {
      inputinWords += " " + getUnits(hundredthousand) + " Hundred";
    }
    if (tenthousand == 0 && thousand != 0) {
      inputinWords += " and " + getUnits(thousand) + " Thousand";
    } else if (tenthousand != 0) {
      inputinWords += " and " + getTens(tenthousand, thousand) + " Thousand";
    } else if (hundredthousand == 0 && tenthousand == 0 && thousand == 0) {
      inputinWords += "";
    } else {
      inputinWords += " Thousand";
    }
    if (hundred != 0) {
      inputinWords += " " + getUnits(hundred) + " Hundred";
    }
    if (ten == 0 && unit != 0) {
      inputinWords += " and " + getUnits(unit);
    } else if (ten != 0) {
      inputinWords += " and " + getTens(ten, unit);
    }
    break;
  default: // Invalid Input
    invalid = true;
    break;
}

// Output
if (invalid) {
  console.log("Invalid Input");
} else {
  console.log(inputinWords, "Only");
}

// Function: get Unit word
function getUnits(unit) {
  return unitsArr[Number(unit)];
}

// Fucntion: get Tens word
function getTens(ten, unit) {
  if (ten == 1 && unit != 0) {
    // Number between 11 and 19
    return teensArr[Number(unit)];
  } else if (ten != 0 && unit == 0) {
    // Number in full tens
    return tensArr[Number(ten)];
  } else if (ten > 1) {
    // Number between 21 and 99
    return tensArr[ten] + " " + unitsArr[unit];
  } else {
    return "";
  }
}
