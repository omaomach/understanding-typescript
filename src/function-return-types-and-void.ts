function addNumbers(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number) {
    console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
}

printResult(addNumbers(12, 13));

let combineValue: (a: number, b: number) => number;  // Function Type

combineValue = addNumbers;
// combineValues = printResult
// combineValues = 25;

console.log(combineValue(8, 8))

addAndHandle(10, 20, (result) => {
    console.log(result)
})

function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending request with "data"
    return cb(data);
    // return cb({data: "Hi there!"});
}

sendRequest("Send this!", (response) => {
    console.log(response);
    return true;
})

