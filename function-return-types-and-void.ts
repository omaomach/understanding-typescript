function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number) {
    console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
}

printResult(add(12, 13));

let combineValues: (a: number, b: number) => number;  // Function Type

combineValues = add;
// combineValues = printResult
// combineValues = 25;

console.log(combineValues(8, 8))

addAndHandle(10, 20, (result) => {
    console.log(result)
})

function sendRequest(data: string, cb: (response: any) => void) {
    // ... sending request with "data"
    return cb({data: "Hi there!"});
    // return cb({data: "Hi there!"});
}

sendRequest("Send this!", (response) => {
    console.log(response);
    return true;
})