const shopName = "Gold Bean";
console.log("Welcome to " + shopName); 
const shopDescription = "A small shop that sells gold beans. They are said to be worth a lot of money, but no one has ever been able to prove it.";
const shopItems = ["Gold Beans","Magic Beans","Dark Roast"];
console.log(shopDescription);
console.log("We have the following items for sale:");
for (let i = 0; i < shopItems.length; i++) {
    console.log("- " + shopItems[i]);
}
let coffeeProduct = {
    name: "Gold Beans Espresso",
    price: 15,
    isAvailable: true
};
console.log("Our featured product is: " + coffeeProduct.name);
console.log("Price: $" + coffeeProduct.price);
if (coffeeProduct.isAvailable) {
    console.log("This product is currently available.");
} else {
    console.log("Sorry, this product is currently out of stock.");}

function calculateTotal(quantity) {
    return quantity * coffeeProduct.price;
}
function displayOrder(quantity) {
    let totalValue = calculateTotal(quantity);
    console.log("Order: " + quantity + " bags of " + coffeeProduct.name);
    alert("Total Price: $" + totalValue);
}
function orderCustomAmount(){let quantity = prompt("How many bags of " + coffeeProduct.name + " would you like to order?");
    displayOrder(quantity);}
function subscribeAlert(){alert("Thanks for joining the Gold Beans Club! Check your email for a 10% discount.";}




