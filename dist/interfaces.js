"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
const user2 = new Person("Joash");
user2.greet("Be smart");
console.log(user2.name);
let user3;
user3 = new Person('Joel');
user3.greet("Be smart");
console.log(user3.name);
let user4;
user4 = new Person("Joshua");
console.log(user4);
