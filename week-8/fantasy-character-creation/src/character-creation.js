"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:
/*
const fs = require('fs');

function createCharacter(character, callback) {
  // TODO: Implement this function
}

function getCharacters(callback) {
  // TODO: Implement this function
}
*/

// For promises:

const fs = require('fs').promises;

const { readFile } = require('fs').promises;
const { writeFile } = require('fs').promises;
const { join } = require("path");
const file = join(__dirname, "characters.json");

async function createCharacter(character) {
  // TODO: Implement this function
  try {
    let characters = [];

    try {
      const data = await readFile(file," utf-8");
      characters = JSON.parse(data);
    } catch (err) {
    }

    characters.push(character);

    await writeFile(file, JSON.stringify(characters, null, 2));

    return true;
  } catch (err) {
    throw new Error("Error writing new character");
  }
}

async function getCharacters() {
  // TODO: Implement this function
  try {
    const data = await readFile(file, "utf8");
    return JSON.parse(data);
  } catch (err) {
    throw new Error("Error reading characters from file");
  }
}

// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

// module.exports = { createCharacter, getCharacters }; // For callbacks
module.exports = { createCharacter, getCharacters }; // For promises