console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
console.log("Made a basket array.");
function addItems(item) {
  console.log("We picked up:", item);
  basket.push(item);
  return basket;
}

addItems("Milk");
addItems("Rice");
addItems("Beef");
addItems("Chicken");
addItems("Potato");

function listItem() {
  for (i = 0; i < basket.length; i++) {
    console.log("What is in our basket? ", basket[i]);
  }
}
listItem();

function empty() {
  basket.length = 0;
  console.log("All items have been removed:", basket);
}

empty();
