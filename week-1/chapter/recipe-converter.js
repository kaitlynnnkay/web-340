const readline = require("readline");

function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })

    rl.question("Enter an ingredient: ", function(ingredient) {
        rl.question("Enter the quantity in tablespoons: ", function(tablespoons) {
            if (isNaN(tablespoons)) {
                console.error("Input must be a number.")
                process.exit(1);
            }

            const cups = (tablespoons / 16).toFixed(2);

            console.log(`For ${ingredient}, ${tablespoons} tablespoons is equivalent to ${cups} cups.`)

            rl.close();
        });
    });
}

main();