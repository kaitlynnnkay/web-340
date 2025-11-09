"use strict";

const plants = [
    {name: "Rose", type: "Flower"},
    {name: "Oak", type: "Tree"},
    {name: "Cactus", type: "Succulent"}
];

// function that returns the plants array
function getPlants() {
    return plants;
}

// function that adds a plant to the plant array
function addPlant(name, type) {
    plants.push({name: name, type: type});
}

// export the functions using the module.exports objects which is part of CommonJS
module.exports = {
    getPlants: getPlants,
    addPlant: addPlant
};
