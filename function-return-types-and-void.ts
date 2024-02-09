function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number) {
    console.log("Result: " + num);
}

printResult(add(12, 13));

let combineValues: (a: number, b: number) => number;  // Function Type

combineValues = add;
// combineValues = printResult
// combineValues = 25;

console.log(combineValues(8, 8))