'use strict'

//First option

let UserNumber = prompt('Enter your number:');

if (isNaN (UserNumber)) {
    console.log ("Data isNaN");
    alert ('Your data is not a number, enter number please:');
} else {
    UserNumber = parseInt(UserNumber);
    for (let processing_result = 2; processing_result < UserNumber; processing_result += 2) {
        console.log (processing_result);
    }
}

//Second option

let User_Number = prompt('Enter your number:');
let CheckData = parseInt (User_Number);

if (isNaN(CheckData)) {
    alert ('Your data is not a number, enter number please:');
} else {
    let endResult = 2;
    while (endResult < CheckData) {
        console.log (endResult);
        endResult += 2;                
    }
}

// 2. Задача FizzBuzz

for (let i = 1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log ('FizzBuzz');        
    } else if (i % 3 === 0) {
        console.log ('Fizz');
    } else if (i % 5 === 0) {
        console.log ('Buzz');
    } else {
        console.log (i);
    }  
}
