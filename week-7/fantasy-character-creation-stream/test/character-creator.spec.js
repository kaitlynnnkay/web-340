/*
Name: Kaitlyn Kelly
Date: 12/6/25
File: character-creator.spec.js
*/

const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    characterCreator.write(JSON.stringify({
      class: "Warrior",
      gender: "Female",
      funFact: "Preferred weapon is an axe."
    }));

    characterCreator.on('data', (chunk) => {
      const output = chunk.toString();
      expect(output).toContain("Warrior");
      expect(output).toContain("Female");
      expect(output).toContain("Preferred weapon is an axe.");
      done();
    });

    characterCreator.read();
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    characterCreator.on('error', (err) => {
      expect(err).toBeTruthy();
      done();
  });

  characterCreator.write("");
  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    const input = {
      class: "Warrior",
      gender: "Female",
      funFact: "Preferred weapon is an axe"
    };

    characterCreator.write(JSON.stringify(input));

    characterCreator.on('data', (chunk) => {
      const output = chunk.toString();
      expect(output).toBe("Created character is a Female Warrior. Character fun fact: Preferred weapon is an axe.\n");
      done();
    });
  });
});