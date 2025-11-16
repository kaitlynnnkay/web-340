/**
 * Author: Kaitlyn Kelly
 * Date: 11/16/25
/ * File Name: index.js
 * Description:
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand.js");

const tacoStand = new TacoStandEmitter();

// TODO: Set up event listeners for the tacoStand object
tacoStand.on("serve", (customer) => {
    console.log(`Taco Stand serves: ${customer}`);
  });

  tacoStand.on("prepare", (taco) => {
    console.log(`Taco Stand prepares: ${taco}`);
  });

  tacoStand.on("rush", (rush) => {
    console.log(`Taco Stand handles rush: ${rush}`);
  });

// readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// prompt to user
console.log(`Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`);

rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const argument = args.join(" "); // formats entry with spaces


  // TODO: Handle the commands
  if (command === "serve") {
    tacoStand.serveCustomer(argument);
  } else if (command === "prepare") {
    tacoStand.prepareTaco(argument);
  } else if (command === "rush") {
    tacoStand.handleRush(argument);
  }
});