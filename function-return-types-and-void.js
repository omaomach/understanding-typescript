"use strict";
function addNumbers(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(addNumbers(12, 13));
let combineValue; // Function Type
combineValue = addNumbers;
// combineValues = printResult
// combineValues = 25;
console.log(combineValue(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
function sendRequest(data, cb) {
    // ... sending request with "data"
    return cb({ data: "Hi there!" });
    // return cb({data: "Hi there!"});
}
sendRequest("Send this!", (response) => {
    console.log(response);
    return true;
});
//# sourceMappingURL=function-return-types-and-void.js.map