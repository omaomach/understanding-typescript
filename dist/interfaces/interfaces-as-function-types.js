"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Students {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.namee = n;
        }
    }
    greet(phrase) {
        if (this.namee) {
            console.log(phrase + ' ' + this.namee);
        }
        else {
            console.log("Hello!");
        }
    }
}
let student;
student = new Students();
