"use strict";
const hobbies = ['Boxing', 'Coding'];
const activeHobbies = ['Sleeping', ...hobbies];
console.log(activeHobbies);
const pers = {
    name: "Joash",
    age: 30
};
const copiedPerson = Object.assign({}, pers);
console.log(copiedPerson);
const multiply = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult * currentValue;
    }, 1);
};
const multipliedNumbers = multiply(1, 2, 3, 4);
console.log(multipliedNumbers);
