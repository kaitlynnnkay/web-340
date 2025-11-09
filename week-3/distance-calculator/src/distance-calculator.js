"use strict";

let planetDistances = {
  Earth: 1.0,
  Jupiter: 5.2,
  Saturn: 9.6,
  Neptune: 30.0
};

function calculateDistance(planet1, planet2) {
  // TODO: Implement this function

  if (!planetDistances[planet1] || !planetDistances[planet2]) {
    console.error(`Planet AU distance not available.`);
    return;
  }

  let result = planetDistances[planet2] - planetDistances[planet1];

  if (planetDistances[planet2] < planetDistances[planet1]) {
    result *= -1;
  }

  return result;
}

module.exports = calculateDistance;