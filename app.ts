function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== "number" || typeof n2 !== "number") {
    //     throw new Error("Input not a number")
    // }
    if (showResult) {
        console.log(n1 + n2)
    } else {
        return n1 + n2
    }
}

const num1 = 25
const num2 = 10
const printResult = true;

const result = add(num1, num2, printResult)
console.log(`This is the result ${result}`)