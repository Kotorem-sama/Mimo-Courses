const input = require("@mimo-org/input");
const items = [];
let running = true;

while (running){
  console.log("'1': Display the list");
  console.log("'2': Add new item");
  console.log("'3': Remove an item");
  console.log("'4': Terminate program");

  const choice = input("Prompt for user: ");

  if (choice === '4'){
    running = false;
  }
  else if (choice === '1'){
    displayList(items);
  }
  else if (choice === '2'){
    const newItem = input("Item to add: ");
    addItem(items, newItem);
  }
  else if (choice === '3'){
    const removeFromIndex = input("Which item would you like to remove?: ");
    const removedItem = removeItem(items, parseInt(removeFromIndex));
    console.log(removedItem);
  }
  else {
    console.log("Error");
  }
}

function displayList(items){
  console.log("\nHere is the list of items:");
  items.forEach((item, index) => {
    console.log(`${index + 1}. ${item}`);
  });
}

function addItem(items, itemToAdd){
  items.push(itemToAdd);
}

function removeItem(items, index){
  displayList(items);
  if (index > 0 && index <= items.length){
    let removed = items[index - 1];
    items.splice(index - 1, 1);
    return removed;
  }
  else {
    console.log('error');
  }
}