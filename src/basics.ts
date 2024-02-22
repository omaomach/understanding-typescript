function addNum(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== "number" || typeof n2 !== "number") {
    //     throw new Error("Input not a number")
    // }
    if (showResult) {
        console.log(n1 + n2)
    } else {
        return n1 + n2
    }
    return phrase
}

const num1 = 25
const num2 = 19
const printResults = true;
const phrase = "This is statically typed"

const results = addNum(num1, num2, printResults, phrase)
console.log(`This is the result ${results}`)