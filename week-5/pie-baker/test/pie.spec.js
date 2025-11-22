/**
 * Author: Kaitlyn Kelly
 * Date:11/22/25
 * File Name: pie.spec.js
 * Description:
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here

test("bake a pumpkin pie successfully with all essential ingredients", () => {
    const result = bakePie("Pumpkin Pie", ["flour", "pumpkin", "sugar", "brown sugar", "butter", "sweetened condensed milk"])
    expect(result).toBe("Pumpkin Pie was successfully baked. Let's eat!");
});

test("bake a cherry pie successfully with all essential ingredients", () => {
    const result = bakePie("Cherry Pie", ["cherries", "sugar", "butter", "flour"])
    expect(result).toBe("Cherry Pie was not baked due to missing flour.");
});

test("unsuccessfully bake a pecan pie because sugar is missing", () => {
    const result = bakePie("Pecan Pie", ["pecans", "brown sugar", "flour", "butter"])
    expect(result).toBe("Pecan Pie was not baked due to missing sugar.");
});