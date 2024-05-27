'use strict'

//1. Напишіть функцію яка буде використовуватись для сортування масиву фільмів. Функція буде приймати два аргумента:
    // - властивість за якою треба посортувати
    // - опцію напрямку сортування (зростання чи спадання)

const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

console.log([...movies].sort(byProperty('releaseYear', '>'))); //виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log([...movies].sort(byProperty('runningTimeInMinutes', '<'))); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
console.log([...movies].sort(byProperty('movieName', '>'))); //виведе масив фільмів посортованих по назві, в алфавітному порядку

function byProperty(property, direction) {
	return function(a, b) {
		if (direction === '>') {
			return (a[property] > b[property]) ? 1 : -1;
		} else if (direction === '<') {
			return (a[property] < b[property]) ? 1 : -1;
		} else {
			return 0;
		}		
	}
}

//2. Напишіть функцію-декоратор яка вповільнює виконання довільної функції на вказану кількість секунд.

function someFunction (...args) {
    let total = 0;
    for (let arg of args) {
        total += arg;
    }
    return total;
}

function slower(func, seconds) {
	const ms = seconds * 1000;
	return (...args) => {
		console.log("Chill out, you will get your result in 5 seconds");
		setTimeout(() => {
			let result = func(...args);
			console.log(result);
		}, ms);		
	};
}

let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction(2, 4)
