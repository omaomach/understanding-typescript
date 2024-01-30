function add(n1, n2, showResult) {
    // if (typeof n1 !== "number" || typeof n2 !== "number") {
    //     throw new Error("Input not a number")
    // }
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
var num1 = 25;
var num2 = 10;
var printResult = true;
var result = add(num1, num2, printResult);
console.log("This is the result ".concat(result));
