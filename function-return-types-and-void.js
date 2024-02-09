function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(12, 13));
var combineValues;
combineValues = add;
combineValues = printResult;
// combineValues = 25;
console.log(combineValues(8, 8));
