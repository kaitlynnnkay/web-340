// video-store.js
const EventEmitter = require("events");

class GameStore extends EventEmitter {
    constructor() {
        super();
        this.preorders = [];
    }

    preorderGame(game, customer) {
        this.preorders.push({game, customer});
        this.emit("gamePreordered", game, customer);
    }

    releaseGame(game) {
        const customersToNotify = this.preorders.filter(preorder => preorder.game === game);
        this.emit("gameAvailable", game, customersToNotify);
    }
}

const gameStore = new GameStore();

// set up listeners
gameStore.on("gamePreordered", (game,customer) => {
    console.log(`Game preordered: ${game} by ${customer}`);
    // reserve a copy of the game for the customer
    // charge the customer's account for the price of the game
});

gameStore.on("gameAvailable", (game, customersToNotify) => {
    console.log(`Game avaialble: ${game}`);
    customersToNotify.forEach(({customer}) => {
        console.log(`Notify ${customer} that ${game} is ready for pickup`);
        // send a text message or email to the customer
    });
});

// preorder some games
gameStore.preorderGame("Fallout 5", "Kaitlyn Kelly");
gameStore.preorderGame("Fallout 5", "Nick Dawson");

// release a game
gameStore.releaseGame("Fallout 5");
