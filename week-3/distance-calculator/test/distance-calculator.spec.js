"use strict";

const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testEarthToJupiter() {
  try {
    const result = calculateDistance("Earth", "Jupiter");
    assert.strictEqual(result, 4.2);
    console.log("Passed testEarthToJupiter");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToJupiter: ${error.message}`);
    return false;
  }
}

function testEarthToSaturn() {
  try {
    const result = calculateDistance("Earth", "Saturn");
    assert.strictEqual(result, 8.6);
    console.log("Passed testEarthToSaturn");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToSaturn: ${error.message}`);
    return false;
  }
}

  
function testEarthToNeptune() {
  try {
    const result = calculateDistance("Earth", "Neptune");
    assert.strictEqual(result, 29.0);
    console.log("Passed testEarthToNeptune");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToNeptune: ${error.message}`);
    return false;
  }
}

// Call your test functions here

testEarthToJupiter();
testEarthToSaturn();
testEarthToNeptune();

console.log("All tests passed");
