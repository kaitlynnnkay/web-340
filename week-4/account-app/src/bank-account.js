// savings-account.js
const EventEmitter = require("events");

class BankAccount extends EventEmitter {
    constructor() {
        super();
        this.balance = 0;
    }

    deposit(amount) {
        if (amount <= 0) {
            this.emit("error", new Error("Deposit amount must be greater than 0."));
            return;
        }
        this.balance += amount;
        this.emit("deposit", amount);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            const error = new Error("Insufficient funds.");
            error.withdrawAmount = amount;
            this.emit("insufficientFunds", amount);
            return;
        }
        this.balance -= amount;
        this.emit("withdraw", amount);
    }
}

const account = new BankAccount(); //create a new BankAccount object

account.on("despoit", (amount) => {
    console.log(`Deposited ${amount}. New balance: ${account.balance}`);
});

account.on("withdraw", (amount) => {
    console.log(`Withdrew ${amount}. New balance: ${account.balance}`);
});

account.on("insufficientFunds", (amount) => {
    console.log(`Attempted to withdraw $${amount}, but only ${account.balance} available.`);
});

// perform some actions
account.deposit(100);
account.withdraw(50);
account.withdraw(60);

module.exports = BankAccount;