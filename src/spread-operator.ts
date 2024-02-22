const hobbies = ['Boxing', 'Coding'];
const activeHobbies = ['Sleeping',...hobbies]

// activeHobbies.push(...hobbies);

console.log(activeHobbies)

const pers = {
    name: "Joash",
    age: 30
}

const copiedPerson = {...pers}
console.log(copiedPerson)

// Rest operators
const multiply = (...numbers: number[]) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult * currentValue
    }, 1)
};

const multipliedNumbers = multiply(1,2,3,4);
console.log(multipliedNumbers)

