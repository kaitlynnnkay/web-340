/**
 * Author: Kaitlyn Kelly
 * Date: 11/2/25
 * File Name: index.js
 * Description:
*/

// TODO: Import your module using require
const {createRecipe, setTimer, quit} = require("./recipes");

// TODO: Implement your CLI program here
const ingredients = [
    "ingredient1",
    "ingredient2"
];

const minutes = 15;

function main() {
    console.log(createRecipe(ingredients));
    console.log(setTimer(minutes));
    console.log(quit());
}

main();