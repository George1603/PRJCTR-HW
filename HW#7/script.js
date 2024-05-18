'use strict'

/*1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval  
Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'*/

// detonatorTimer(3);

// function detonatorTimer(delay) {
//     let timer = delay;
//     const timerId = setInterval(() => {
//         if (timer !== 0) {
//             console.log(timer);
//             timer--;            
//         } else {
//             clearInterval(timerId);
//             console.log('BOOM!');
//         }
//     }, 500);
// }

// альтернатива

// function detonatorTimer(delay) {
//     let timer = delay;
//     const timerId = setInterval(() => {
//         if (timer === 0) {
//             clearInterval(timerId);
//             console.log('BOOM!');
//         } else {
//             console.log(timer);
//             timer--;
//         }
//     }, 500);
// }

/*2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout
Вона виводить в консоль число кожну секунду, починаючи з delay (ціле число) і в кінці замість 0 виведе 'BOOM!'*/

// detonatorTimer(3);

// function detonatorTimer(delay) {
//     let timer = delay;
    
//     function countdown() {
//         if (timer > 0) {
//             console.log(timer)
//             timer--
//             setTimeout (countdown, 500);
//             //countdown();
//         } else {
//             console.log('BOOM!')
//         }
//     }
//     countdown()
// }

//3. Напишіть об'єкт в якому опишіть свої довільні властивості та довільні методи що ці властивості виводять. 

let me = {
	name: 'Yurii',
	residency: 'Lviv',
	gender: 'male',
	age: 27,
	hobby: 'swimming',
    goal: 'to have good knowledge in programming',
	defaultMood: 'sleepy',
	currentMood: 'perplexed',
    motto: 'do you know what is characteristic of plankton? - it does not like to be touched. Do you know what is characteristic of winners? - the ability to rise after a blow to the head',
    lifestyle: 'like a duck on water - as if always in a state of rest, but the legs never stop',
	introduce() {
		console.log(`My name is ${this.name} and I live in ${this.residency}`);
	},
	prognose() {
		console.log(`I hope that next year I'm gonna be ${this.age+1}`);
	},
	describeMyMood(){
		console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
	},
    desire(){
        console.log(`I want ${this.goal}`);
    },
    watchword(){
        console.log(`In this life one must always move forward and never give up. Because life is a movement, despite all the blows of life. My favorite life wisdom is: ${this.motto}`);
    },
    behavior(){
        console.log(`In fact, it is difficult to describe myself, but I can describe my lifestyle as follows: ${this.lifestyle}`);
    }
}

// me.introduce();
// me.prognose();
// me.describeMyMood();
// me.desire();
// me.watchword();
// me.behavior();

//4. А тепер зробіть всі свої методи з попередньої задачі прив'язаними до контексту свого об'єкту Аби вони були захищені від перезапису об'єкту і їх можна було викликати в таймері:

let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);
let securedSelfDesire = me.desire.bind(me);
let securedSelfWatchword = me.watchword.bind(me);
let securedSelfBehavior = me.behavior.bind(me);

setTimeout(securedSelfIntroduce, 1000); 
setTimeout(securedSelfPrognose, 2000); 
setTimeout(securedSelfDescribeMyMood, 3000); 
setTimeout(securedSelfDesire, 4000);
setTimeout(securedSelfWatchword, 5000);
setTimeout(securedSelfBehavior, 6000);

