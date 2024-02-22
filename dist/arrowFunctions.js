"use strict";
const divide = (a, b = 4) => a / b;
console.log(divide(6));
const printOutput = output => console.log(output);
printOutput(divide(5));
const butt = document.getElementById('btn');
if (butt) {
    butt.addEventListener('click', event => console.log(event));
}
