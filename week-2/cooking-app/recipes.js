/**
 * Author: Kaitlyn Kelly
 * Date: 11/2/25
 * File Name: recipes.js
 * Description:
*/

// Define the createRecipe function
function createRecipe(ingredients) {
  // TODO: Implement this function
  return "Recipe created with ingredients: " + ingredients[0] + ", " + ingredients[1];
}

// Define the setTimer function
function setTimer(minutes) {
  // TODO: Implement this function
  return "Timer set for " + minutes + " minutes";
}

// Define the quit function
function quit() {
  // TODO: Implement this function
  return "Program exited";
}

// TODO: Export the functions
module.exports = {
  createRecipe: createRecipe,
  setTimer: setTimer,
  quit: quit,
};