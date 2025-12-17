/**
 * Author: Kaitlyn Kelly 
 * Date: 11/22/25
 * File Name: pie.js
 * Description:
 */
"use strict";

const essentialIngredients = ["flour", "sugar", "butter"];

function bakePie(pieType, ingredients) {
  // Your code here

  // iterate through essentialIngredients to see if each ingredient was passed to the function
  for (let i = 0; i < essentialIngredients.length; i++) {
    const currentIngredient = essentialIngredients[i];

    // if an essentialIngredient was not passed to the function, stop the loop then print and return an error message
    if (!ingredients.includes(currentIngredient)) {
      let failedMessage = `${pieType} was not baked due to missing ${currentIngredient}.`;
      console.log(failedMessage); // print error message
      return failedMessage; // return error message
    }
  }

  let successMessage = `${pieType} was successfully baked. Let's eat!`;
  console.log(successMessage); // print success message
  return successMessage; // return success message
}

module.exports = { bakePie };