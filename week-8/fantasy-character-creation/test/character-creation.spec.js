"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
// const fs = require('fs');

// For promises:
const fs = require('fs').promises;
const { join } = require("path");
const file = join(__dirname, "../src/characters.json");

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeEach(() => {
    jest.resetModules();
    // TODO: Set up your mocks here
    ({ createCharacter, getCharacters } = require('../src/character-creation'));
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file

  test("write a new character to the file", async () => {
    const character = { class: "Warrior", gender: "Female", fact: "Preferred weapon is an axe." };

    const result = await createCharacter(character);
    expect(result).toBe(true)
  });

  // 2. Test that getCharacters reads characters from the file

  test("reads characters from the file", async () => {
    const characters = [
      { class: "Warrior", gender: "Female", fact: "Preferred weapon is an axe." },
      { class: "Mage", gender: "Female", fact: "Ironically, hates magic." }
    ];

    await fs.writeFile(file, JSON.stringify(characters, null, 2));

    const result = await getCharacters();
    expect(result).toEqual(characters);
  });

  // 3. Test that createCharacter handles errors when writing to the file

  test("function throws an error", async () => {
    await fs.writeFile(file, "Not Valid JSON");

    await expect(getCharacters()).rejects.toThrow("Error reading characters from file")
  });
});