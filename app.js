"use strict";
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "Omao",
//     age: 25
// }
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === "as-number") {
    //     return +result
    // } else {
    //     return result.toString();
    // }
}
const combinedAges = combine(22, 24, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("22", "24", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Joel", "Joash", "as-string");
console.log(combinedNames);
