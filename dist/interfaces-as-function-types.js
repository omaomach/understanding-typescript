"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Students {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
