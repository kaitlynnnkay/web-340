const chalk = require("chalk");
const readline = require("readline");

function colorMessage(color) {
    const output = "\nYour favorite color is ";

    switch(color) {
        case "1":
            color = "blue";
            return chalk.blue(output + color);
        case "2":
            color = "red";
            return chalk.red(output + color);
        case "3":
            color = "green";
            return chalk.green(output + color);
        case "4":
            color = "yellow";
            return chalk.yellow(output + color);
        case "5":
            color = "cyan";
            return chalk.cyan(output + color);
        default:
            return "Invalid color";
    }
}

function menu() {
    console.log("\nAvailable colors:");
    console.log("1. Blue");
    console.log("2. Red");
    console.log("3. Green");
    console.log("4. Yellow");
    console.log("5. Cyan");
}

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    menu();

    rl.question("\nWhat is your favorite color? ", function(answer) {
        console.log(colorMessage(answer));
        rl.close();
    });

}

main();