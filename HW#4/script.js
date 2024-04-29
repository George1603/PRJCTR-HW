'use strict'

//1. Задача на розворот числа

const currentMaxValue = 4589;
let reverseMaxValue = parseInt(currentMaxValue.toString().split('').reverse().join(''));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'

//2. Задача на знаходження добутку масиву чисел з невідомою глибиною вкладеності

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(Infinity).map(Number).reduce((prev, current) => {
    //console.log (prev, current);
    return prev * current;
},
)

console.log(productOfArray); // 24
