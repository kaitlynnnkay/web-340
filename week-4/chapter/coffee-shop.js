// coffee-shop.js
const EventEmitter = require("events");

class CoffeeShop extends EventEmitter {
    constructor() {
        super();
        this.orderQueue = [];
    }

    placeOrder(order) {
        this.orderQueue.push(order);
        this.emit("orderPlaced", order);
    }

    completeOrder() {
        const completeOrder = this.orderQueue.shift();
        this.emit("orderReady", completeOrder);
    }
}

const coffeeShop = new CoffeeShop(); // create a new CoffeeShop object

coffeeShop.on("orderPlaced",(order) => {
    console.log(`Order placed: ${order}`);
    console.log(`Order queue: ${coffeeShop.orderQueue.join(",")}`);
    // notify barista to prepare the coffee
    // print the receipt
});

coffeeShop.on("orderReady",(order) => {
    console.log(`Order ready: ${order}`);
    // Inform the customer their order is ready
});

// Place some orders

coffeeShop.placeOrder("Large Iced Mocha");
coffeeShop.placeOrder("Medium Blended Caramel");

// Complete an order

coffeeShop.completeOrder();