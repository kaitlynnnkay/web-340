/*
Name: Kaitlyn Kelly
Date: 12/4/25
File: character-creator.js
*/

const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this.characters = []; // array to store character data
  }


  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    try {
      const characterData = JSON.parse(chunk.toString()); // convert chunk into a string & then parse it as JSON
      this.characters.push(characterData); // store parsed data in the characters array
      callback();
    } catch (err) {
      callback(err);
    }
  }

  _read(size) {
    // TODO: Implement your _read method here
    if (this.characters.length === 0) { // push null when no characters left
      this.push(null);
      return;
    }

    const char = this.characters.shift();
    const charDescription = `Created character is a ${char.gender} ${char.class}. Character fun fact: ${char.funFact}.\n`; // formatted output from parsed data
    this.push(charDescription); // push the formatted output out of the stream
  }
}

module.exports = CharacterCreator;