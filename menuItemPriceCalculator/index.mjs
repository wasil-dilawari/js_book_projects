//Chapter Project: Menu Item Price Calculator

//imports
import PromptSync from "prompt-sync";
const prompt = PromptSync();

//Function: Check Selection Validity
function validSelection(val, arrlength) {
  let status = true;
  if (val < 0 || val >= arrlength.length) {
    console.log("Incorrect value");
    return false;
  }
  return true;
}

//Function: Check Quantity Validity
function validQty(val) {
  let status = true;
  if (val < 0) {
    console.log("Incorrect value");
    return false;
  }
  return true;
}

//Function: Display Order
function displayOrder(arr) {
  console.log("\n---------------------------");
  console.log("Your Order is");
  for (let i in arr) {
    console.log(`${arr[i].qty} x ${arr[i].itemTitle}`);
    orderTotal = orderTotal + arr[i].amount;
  }
  console.log(`Total Amount for your Order is Rs. ${orderTotal}`);
  console.log("---------------------------");
  console.log("\nThank You for Your Visit\n");
}

//initializing variables
const menu = [];
const order = [];
var orderTotal = 0;
var repeat = true;

class MenuItem {
  constructor(itemName, price) {
    (this.itemName = itemName), (this.price = price);
  }
}

class OrderItem {
  constructor(itemTitle, qty, amount) {
    (this.itemTitle = itemTitle), (this.qty = qty), (this.amount = amount);
  }
}

//Setting Menu Items
let item1 = new MenuItem("Burger", 500);
let item2 = new MenuItem("Fries", 250);
let item3 = new MenuItem("Drink", 150);
let item4 = new MenuItem("Meal", 800);

menu.push(item1, item2, item3, item4);

//Welcome Message and Display Menu
console.clear();
console.log("Welcome!\n\nMenu:");
for (let i in menu) {
  console.log(`Item-${i + 1}: ${menu[i].itemName} for Rs.${menu[i].price}`);
}

//Getting User Input
while (repeat) {
  console.log("");
  let status = true;
  do {
    var selItem = Number(prompt("Please select item: ")) - 1;
    status = validSelection(selItem, menu);
  } while (!status);
  do {
    var selQty = Number(prompt(`How many ${menu[selItem].itemName}: `));
    status = validQty(selQty);
  } while (!status);
  let selAmount = selQty * menu[selItem].price;
  console.log(
    `${menu[selItem].itemName} ${selQty} x ${menu[selItem].price} = ${selAmount}`
  );

  let newOrder = new OrderItem(menu[selItem].itemName, selQty, selAmount);
  order.push(newOrder);
  let temp = prompt("Add Another Item? (y/n) ");
  if (temp === "n") {
    repeat = false;
  }
}

//Display Order
displayOrder(order);
