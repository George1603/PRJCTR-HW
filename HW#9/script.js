'use strict'

// Задача на селектори
// Для сторінки напишіть селектори для наступних елементів:
    // для елементу з текстом 'Навігація по DOM дереву'
    // для першого елементу <section>
    // для елементу списку з текстом 'Пункт 5'
    // для елементу з класом 'hatredLevelBlock'

let navigationSelector = document.querySelector('#headerTwo');
console.log(navigationSelector);

// let firstSectionSelector = document.querySelector('.firstSection');
// console.log(firstSectionSelector);

let firstItemInSectionSelector = document.querySelector('.firstSection h2');
console.log(firstItemInSectionSelector);

let fifthListElement = document.querySelector('ul li:nth-child(5)');
console.log(fifthListElement);

let hatredBlock = document.querySelector('.hatredLevelBlock');
console.log(hatredBlock);