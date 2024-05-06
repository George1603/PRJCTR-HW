'use strict'

//Задача про перетворення об'єкту

const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};

console.log(priceData)

let updatedPriceData = {...priceData}

updatedPriceData = Object.fromEntries (
    Object.entries(priceData).map(([key, value]) => 
    [key.toLowerCase(), parseFloat(value).toFixed(2)])
);

// let updatedPriceData = Object.assign ({}, priceData)

// updatedPriceData = Object.fromEntries (
//     Object.entries(priceData).map(([key, value]) => 
//     [key.toLowerCase(), parseFloat(value).toFixed(2)])
// );

console.log(updatedPriceData) // {apples: '23.40', bananas: '48.00', oranges: '48.76'}