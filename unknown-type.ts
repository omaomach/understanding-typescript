let userInput: unknown; // a bit more ristictive as compared to the any type
// let userInput: any; // here typescript does not check for any types at all.
let userName: string;

userInput = 5;
userInput = "Joshua"

// userName = userInput;

if (typeof userInput === "string") {
    console.log(userName = userInput);
}