/**
 * Author: Kaitlyn Kelly
 * Date: 11/16/25
 * File Name: taco-stand.spec.js
 * Description:
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand.js");
const tacoStand = new TacoStandEmitter();

// TODO: Write tests for the TacoStandEmitter methods

function testServeCustomer() {
    try {
        tacoStand.on("serve", (customer) => {
            assert.strictEqual(customer, "John", `Taco Stand serves: ${customer}`);
            console.log(`Taco stand serves: ${customer}`);
        });
        tacoStand.serveCustomer("John");
        return true;
    } catch (err) {
        console.error(`Failed testServeCustomer()`);
        return false;
    }
}

function testPrepareTaco() {
    try {
        tacoStand.on("prepare", (taco) => {
            assert.strictEqual(taco, "beef taco", `Taco Stand prepares: ${taco}`);
            console.log(`Taco Stand prepares: ${taco}`);
        });
        tacoStand.prepareTaco("beef taco");
        return true;
    } catch (err) {
        console.error(`Failed testPrepareTaco()`);
        return false;
    }
}

function testHandleRush() {
    try {
        tacoStand.on("rush", (rush) => {
            assert.strictEqual(rush, "lunch", `Taco Stand handles rush: ${rush}`);
            console.log(`Taco Stand handles rush: ${rush}`);
        });
        tacoStand.handleRush("lunch");
        return true;
    } catch (err) {
        console.error(`Failed testHandleRush()`);
        return false;
    }
}

testServeCustomer();
testPrepareTaco();
testHandleRush();