/**
 * Author: Kaitlyn Kelly
 * Date: 10/25/25
 * File Name: weight-converter.js
 * Description: Week 1 Assignment for WEB340
*/

"use strict";

// TODO: Implement the weight conversion logic here

const readline = require("readline"); // Import readline

function main() {
    // Check if user entered a weight in pounds
    if (process.argv.length != 3) {
        console.error("stderr: 'Usage: node weight-converter.js <pounds>'");
        process.exit(1) // Exit with a non-zero status code
    }

    const pounds = process.argv[2]; // Get the pound from the third CLI argument
    
    if (isNaN(pounds)) {
        console.error("Input must be a number."); // Display an error msg if input is not a number
        process.exit(1); // Exit with a non-zero status code if input is not a number
    }

    const kilograms = (pounds / 2.205).toFixed(2) // Calculate pounds input to convert to kg, rounded to 2 decimal places

    console.log(`${pounds}lbs converted to kilograms is ${kilograms}kg.`); // Print the conversion to the console
}

main(); // Call the main function
