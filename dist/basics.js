"use strict";
function addNum(n1, n2, showResult, phrase) {
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
    return phrase;
}
const num1 = 25;
const num2 = 19;
const printResults = true;
const phrase = "This is statically typed";
const results = addNum(num1, num2, printResults, phrase);
console.log(`This is the result ${results}`);
