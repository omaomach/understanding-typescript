function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(12, 13));
var combineValues; // Function Type
combineValues = add;
// combineValues = printResult
// combineValues = 25;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
function sendRequest(data, cb) {
    // ... sending request with "data"
    return cb({ data: "Hi there!" });
}
sendRequest("Send this!", function (response) {
    console.log(response);
    return true;
});